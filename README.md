# Custra — Landing Page

The early-access landing page for Custra. Static site, no build step. Push to GitHub, point your hosting at the repo, done.

---

## What's in this folder

| File | What it's for |
|---|---|
| `index.html` | The page shell. Loads fonts, React, Babel, then `landing.jsx`. |
| `landing.jsx` | **All the page content.** Edit copy here. |
| `favicon.svg` | Browser tab icon (Custra mark). |
| `custra-mark.svg` | Standalone Custra mark, in case you want to use it elsewhere. |
| `README.md` | You are here. |

That's it. No `package.json`, no `node_modules`, no build script. The page is rendered in the browser via Babel-standalone — slower than a compiled bundle but trivially deployable. Once you're happy with the design, you can upgrade to a real Next.js / Vite build later (see "Upgrading later").

---

## Editing copy

All the words on the page live in **`landing.jsx`**. Open it in any code editor (VS Code, Cursor, even GitHub's web editor) and search for the text you want to change.

Each section of the page is a separate component with a clearly labeled header. Quick map:

| Looking for… | Find this comment in `landing.jsx` |
|---|---|
| Nav links and "Early access · open" pill | `// ─── Nav ───` |
| Hero headline, subhead, "487 D2C founders" | `// ─── Hero ───` |
| "Today's briefs" panel — angle cards, button labels | `// ─── Today's briefs panel ───` |
| 3-step "How it works" copy | `// ─── How it works ───` |
| Case study cards (sleep mask, coffee, etc.) | `// ─── Case studies / proof ───` |
| Manifesto quote and founder line | `// ─── Editorial moment / manifesto ───` |
| FAQ questions and answers | `// ─── FAQ ───` |
| "Don't guess. Listen." CTA + final form | `// ─── Final CTA ───` |
| Footer copyright and social links | `// ─── Footer ───` |

After saving, just refresh the page in your browser — no rebuild needed.

### Tip — wiring the email form to a real backend
Right now both `<form>` tags `alert()` on submit. To actually capture emails, replace those handlers with a `fetch()` to your endpoint (e.g. ConvertKit, Loops, Beehiiv, your own API, or a Vercel/Netlify form). Search for `onSubmit` in `landing.jsx` — there are exactly two forms (hero + final CTA).

---

## Deploying

### Option 1 — Vercel (recommended, 3 minutes)

1. **Create a GitHub repo.** Anywhere — GitHub, GitLab, Bitbucket are all fine.
2. Drag the contents of this folder into the repo root, commit, push.
3. Go to **[vercel.com/new](https://vercel.com/new)**, sign in with GitHub, and click "Import" on your repo.
4. Vercel auto-detects it as a static site. Don't change any settings — just click **Deploy**.
5. Done. You get a `your-repo.vercel.app` URL within ~30 seconds.

### Option 2 — Netlify (also 3 minutes)

1. Create a GitHub repo with the contents of this folder.
2. Go to **[app.netlify.com/start](https://app.netlify.com/start)**, sign in with GitHub.
3. Pick the repo. Build command: *(leave empty)*. Publish directory: *(leave as `.` or empty)*.
4. Click **Deploy**. You get a `your-repo.netlify.app` URL.

### Option 3 — GitHub Pages (free, zero external services)

1. Create a public GitHub repo with the contents of this folder.
2. In the repo, go to **Settings → Pages**.
3. Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**. Save.
4. Wait ~30 seconds. Your URL is `https://<username>.github.io/<repo-name>/`.

---

## Pointing your domain (custra.com or similar)

Once deployed:

### On Vercel
1. Open the project → **Settings → Domains** → **Add**.
2. Enter `custra.com` (and `www.custra.com`).
3. Vercel shows you the exact DNS records to add at your registrar. Two common options:
   - **A record** `@` → `76.76.21.21` (root domain)
   - **CNAME** `www` → `cname.vercel-dns.com` (www subdomain)
4. Add those at your registrar (Namecheap, GoDaddy, Cloudflare, Porkbun, etc.). Propagation usually takes <10 minutes; can be up to 24 hours.
5. Vercel auto-issues an SSL cert — your site is live on HTTPS automatically.

### On Netlify
1. Project → **Domain management** → **Add a domain**.
2. Same flow: Netlify gives you the DNS records, you add them at your registrar.

### On GitHub Pages
1. Settings → Pages → **Custom domain** → enter `custra.com`.
2. At your registrar, point an A record to GitHub Pages IPs:
   - `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Tick **Enforce HTTPS** once the cert is issued (~10 min).

---

## Local preview (optional)

You don't need a build, but you do need to serve over HTTP (opening `index.html` directly hits browser security limits when loading `landing.jsx`).

The simplest options:
```bash
# Python (every Mac/Linux box already has this)
python3 -m http.server 5173
# then open http://localhost:5173

# or, if you have Node
npx serve .
```

---

## Upgrading later (when you're past iteration)

The current setup runs Babel in the browser — fine for early access, but you'll outgrow it once you have real traffic. When you're ready:

1. Spin up a **Next.js** or **Vite + React** project (`npx create-next-app@latest` or `npm create vite@latest`).
2. Copy the section components out of `landing.jsx` into separate `.jsx`/`.tsx` files.
3. Replace the inline `<style>` blocks and inline `style={}` props with your styling system of choice (Tailwind, CSS Modules, plain CSS — all fine).
4. Replace `<form>` submit handlers with real API calls (or use the framework's form helpers).

The brand handoff package (`design_handoff_custra_brand/` in the original project) has all the design tokens you'll need.

---

## License / brand
The page content, mark, wordmark and palette are proprietary to Custra Labs Inc. Don't reuse without permission.
