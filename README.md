# Cybersecurity Portfolio

## Branch Structure

| Branch | Contents |
|--------|----------|
| `main` | Minimal — only `README.md` and `CNAME` |
| `gh-pages` | All website source files (Next.js app); deployed to GitHub Pages |

## Setup

Before merging the PR that makes `main` minimal, run the **"Create gh-pages branch"** workflow
(`workflow_dispatch`) from the **Actions** tab to copy all website files from `main` to a new
`gh-pages` branch.  GitHub Actions will then automatically build and deploy the site whenever
`gh-pages` is updated.

## Developing Locally

Switch to the `gh-pages` branch and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

Pushing to `gh-pages` triggers the **"Deploy Next.js site to GitHub Pages"** workflow
automatically.