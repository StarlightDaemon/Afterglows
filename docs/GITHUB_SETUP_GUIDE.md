# 🚀 GitHub Pages Setup Guide for Afterglows

This guide will walk you through hosting your **Afterglows** project on GitHub Pages.

## ✅ Phase 1: Preparation (Already Done!)
I have already:
1.  Initialized the git repository.
2.  Added all project files.
3.  Created the initial commit.

Your local project is ready to go.

## 🛠 Phase 2: Create Repository on GitHub

1.  Log in to **[GitHub.com](https://github.com)**.
2.  Click the **+** (plus) icon in the top right and select **New repository**.
3.  **Repository name**: `Afterglows` (or whatever you prefer).
4.  **Description**: "Experimental Playground & Open Source Archive".
5.  **Public/Private**: Choose **Public** (required for free GitHub Pages).
6.  **Initialize this repository with**: Leave all these **unchecked** (we already have code).
7.  Click **Create repository**.

## 🔗 Phase 3: Push Code

Copy the commands GitHub shows you under **"…or push an existing repository from the command line"**, or run these:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Afterglows.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your actual GitHub username)*

## 🌍 Phase 4: Enable GitHub Pages

1.  Go to your repository **Settings** tab.
2.  On the left sidebar, click **Pages**.
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select **main** and folder **/(root)**.
5.  Click **Save**.

## 🎉 Phase 5: Verification

After a minute or two, refresh the Pages settings. You will see a banner:
> **"Your site is live at https://your-username.github.io/Afterglows/"**

Click that link to verify your new site!
