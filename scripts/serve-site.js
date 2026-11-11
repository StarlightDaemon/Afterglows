// Loopback-only static preview of the built Pages artifact (`dist/`).
// Dependency-free replacement for http-server: binds 127.0.0.1 only, sends no
// CORS headers, never lists directories, refuses dotfiles and anything outside
// the artifact, disables caching, and answers unknown paths with the custom
// 404 page, as GitHub Pages does.
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const HOST = "127.0.0.1";

const TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const BASE_HEADERS = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function contentType(file) {
  return TYPES[path.extname(file).toLowerCase()] || "text/plain; charset=utf-8";
}

async function statOrNull(file) {
  try {
    return await fs.stat(file);
  } catch {
    return null;
  }
}

export function createSiteServer(root) {
  const base = path.resolve(root);
  const realBase = fs.realpath(base);

  // Returns a servable file path, a redirect target, or null for "not found".
  async function resolveRequest(pathname, search) {
    if (!pathname.startsWith("/") || pathname.startsWith("//")) return null;
    if (pathname.includes("\0") || pathname.includes("\\")) return null;
    if (pathname.split("/").some((part) => part.startsWith("."))) return null;

    const target = path.resolve(base, `.${pathname}`);
    const relative = path.relative(base, target);
    if (relative.startsWith("..") || path.isAbsolute(relative)) return null;

    let file = target;
    let stat = await statOrNull(file);
    if (stat?.isDirectory()) {
      if (!pathname.endsWith("/")) return { redirect: `${pathname}/${search}` };
      file = path.join(target, "index.html");
      stat = await statOrNull(file);
    }
    if (!stat?.isFile()) return null;

    // Symlinks must not lead out of the artifact.
    const realFile = await fs.realpath(file);
    const realRelative = path.relative(await realBase, realFile);
    if (realRelative.startsWith("..") || path.isAbsolute(realRelative)) return null;
    return { file };
  }

  async function send(response, method, status, file) {
    const body = await fs.readFile(file);
    response.writeHead(status, {
      ...BASE_HEADERS,
      "Content-Type": contentType(file),
      "Content-Length": body.length,
    });
    response.end(method === "HEAD" ? undefined : body);
  }

  async function notFound(response, method) {
    const page = path.join(base, "404.html");
    if (await statOrNull(page)) return send(response, method, 404, page);
    response.writeHead(404, { ...BASE_HEADERS, "Content-Type": "text/plain; charset=utf-8" });
    response.end(method === "HEAD" ? undefined : "Not found");
  }

  return http.createServer(async (request, response) => {
    const method = request.method;
    try {
      if (method !== "GET" && method !== "HEAD") {
        response.writeHead(405, { ...BASE_HEADERS, Allow: "GET, HEAD" }).end();
        return;
      }
      // `//host/...` would otherwise parse as a scheme-relative URL.
      if (!request.url.startsWith("/") || request.url.startsWith("//")) {
        await notFound(response, method);
        return;
      }
      let url;
      let pathname;
      try {
        url = new URL(request.url, `http://${HOST}`);
        pathname = decodeURIComponent(url.pathname);
      } catch {
        response.writeHead(400, BASE_HEADERS).end();
        return;
      }
      const resolved = await resolveRequest(pathname, url.search);
      if (resolved?.redirect) {
        response.writeHead(301, { ...BASE_HEADERS, Location: resolved.redirect }).end();
      } else if (resolved?.file) {
        await send(response, method, 200, resolved.file);
      } else {
        await notFound(response, method);
      }
    } catch {
      if (!response.headersSent) response.writeHead(500, BASE_HEADERS);
      response.end();
    }
  });
}

function parsePort(argv, env) {
  const flag = argv.indexOf("--port");
  const raw = flag >= 0 ? argv[flag + 1] : env.PORT || "3000";
  const port = Number(raw);
  if (!Number.isInteger(port) || port < 1024 || port > 65535) {
    throw new Error(`Invalid port "${raw}" (expected 1024-65535)`);
  }
  return port;
}

const invokedDirectly =
  process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (invokedDirectly) {
  const root = fileURLToPath(new URL("../dist/", import.meta.url));
  if (!(await statOrNull(path.join(root, "index.html")))) {
    console.error("dist/ is missing or empty; run `npm run build` first.");
    process.exit(1);
  }
  const port = parsePort(process.argv.slice(2), process.env);
  const server = createSiteServer(root);
  server.on("error", (error) => {
    console.error(error.code === "EADDRINUSE" ? `Port ${port} is already in use.` : error.message);
    process.exit(1);
  });
  server.listen(port, HOST, () => {
    console.log(`Afterglows preview: http://${HOST}:${port}/ (serving dist/, loopback only)`);
  });
}
