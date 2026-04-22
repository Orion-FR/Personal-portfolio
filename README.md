# Paul Robain — Portfolio

Personal portfolio site. Vanilla HTML, CSS, and JavaScript with an "Arctic Mist" liquid-glass design.

## Local preview

Any static server works. Two easy options:

```bash
# Python (no install)
python3 -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000>.

## Project structure

```
.
├── index.html                    # Markup and content
├── styles.css                    # Arctic Mist design system
├── script.js                     # Scroll reveal, nav, mobile menu
├── assets/
│   └── profile.jpg               # Your portrait (add this file)
└── .github/workflows/deploy.yml  # GitHub Pages CI
```

## Profile picture

Download your LinkedIn photo and save it as `assets/profile.jpg`. The `<img>`
tag in `index.html` falls back to the LinkedIn CDN URL if the file is missing,
but that URL will expire, so add the local file.

## Deploying to GitHub Pages

1. **Create the repository on GitHub** (e.g. `paul-robain/portfolio`) and push:
   ```bash
   git remote add origin git@github.com:<your-username>/<repo-name>.git
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git push -u origin main
   ```

2. **Enable Pages**: GitHub → repo → **Settings** → **Pages** → *Source* =
   **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` handles
   the rest on every push to `main`.

3. **Custom domain** (optional, for `paulrobain.fr`):
   - In **Settings → Pages → Custom domain**, enter `paulrobain.fr`.
   - At your DNS registrar, add either:
     - An `A` record on the apex pointing to GitHub Pages IPs
       (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
       `185.199.111.153`), or
     - A `CNAME` on `www` pointing to `<your-username>.github.io`.
   - GitHub will add a `CNAME` file to the repo automatically — keep it.

## Editing content

All content lives in `index.html`. Sections are clearly commented
(`<!-- Hero -->`, `<!-- Experience -->`, etc.). Duplicate a card block to add
a new entry.
