"""Format literal expansion artwork for source review; no visual changes."""
from pathlib import Path
import re
from xml.dom import minidom

ROOT = Path(__file__).resolve().parents[2]


def css_lines(source):
    depth = 0
    token = ""
    lines = []
    for char in source:
        if char == "{":
            lines.append("        " + "  " * depth + token.strip() + " {")
            token = ""
            depth += 1
        elif char == "}":
            if token.strip():
                lines.append("        " + "  " * depth + token.strip())
            token = ""
            depth -= 1
            lines.append("        " + "  " * depth + "}")
        elif char == ";":
            lines.append("        " + "  " * depth + token.strip() + ";")
            token = ""
        else:
            token += char
    return "\n".join(lines)


def format_component(file):
    code = file.read_text(encoding="utf-8")
    # Avoid touching historical modules; this marker belongs to the new shell.
    if "Canonical definition and motion thesis: manifest metadata." not in code:
        return
    code = re.sub(r"-?\d+\.\d{5,}", lambda m: str(round(float(m[0]), 3)), code)
    code = re.sub(r"<style>(.*?)</style>", lambda m: "<style>\n" + css_lines(m[1]) + "\n      </style>", code, flags=re.S)
    def svg(match):
        doc = minidom.parseString(match[0])
        lines = doc.documentElement.toprettyxml(indent="  ").splitlines()
        return "\n".join(("      " if i else "") + line for i, line in enumerate(lines) if line.strip())
    code = re.sub(r'<svg viewBox="0 0 140 140".*?</svg>', svg, code, flags=re.S)
    file.write_text(code, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    for file in (ROOT / "concepts/gallery/concepts").rglob("*-concept.js"):
        format_component(file)
