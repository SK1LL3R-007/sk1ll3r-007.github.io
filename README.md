# Cybersecurity Portfolio

## Branch Structure

| Branch | Contents |
|--------|----------|
| `main` | Minimal — only `README.md` and `CNAME` |
| `gh-pages` | All website source files (Next.js app); auto-deployed to GitHub Pages on every push |

## One-time setup (run this BEFORE merging the PR)

1. Go to **Actions → Create gh-pages branch → Run workflow**.
2. In the branch dropdown select **`copilot/gh-pages-setup`** (the PR branch — the workflow
   file lives there, not on `main` yet).
3. Click **Run workflow** and wait for it to complete.

The workflow checks out the current `main` branch (which still has all Next.js source files),
fixes the deploy-pipeline trigger to point at `gh-pages`, and force-pushes everything to a new
`gh-pages` branch.

4. Once the workflow is green, **merge this PR** — `main` becomes minimal.

## Developing locally

```bash
git checkout gh-pages
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deployment

Every push to `gh-pages` automatically triggers the **"Deploy Next.js site to GitHub Pages"**
workflow, which builds the static export and publishes it to <https://sk1ll3r.me>.
