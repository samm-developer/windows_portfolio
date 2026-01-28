# Deployment Guide

## Quick Deploy Options

### 🚀 Option 1: Vercel (Recommended - Easiest)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite settings
5. Add environment variables in project settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

**Or use CLI:**
```bash
npm install -g vercel
vercel
```

**Benefits:**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Custom domain support

---

### 🌐 Option 2: Netlify

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in Site settings → Environment variables
7. Click "Deploy site"

**Or use CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Benefits:**
- ✅ Free tier
- ✅ Form handling (if needed)
- ✅ Split testing
- ✅ Custom domain support

---

### 📦 Option 3: GitHub Pages

**Steps:**
1. Update `vite.config.js` (see below)
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repo settings → Pages → Source: `gh-pages` branch

**Update vite.config.js:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change to your GitHub repo name
})
```

**Benefits:**
- ✅ Free
- ✅ Good for open-source portfolios
- ⚠️ Requires base path configuration

---

### ☁️ Option 4: Cloudflare Pages

**Steps:**
1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Pages → Create a project → Connect to Git
4. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Add environment variables
6. Deploy

**Benefits:**
- ✅ Free tier
- ✅ Fast global CDN
- ✅ Unlimited bandwidth
- ✅ Custom domain with SSL

---

## Pre-Deployment Checklist

### 1. Build Locally First
```bash
npm run build
npm run preview  # Test the production build locally
```

### 2. Environment Variables
Make sure to add these in your hosting platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 3. Check File Sizes
- Optimize images if needed
- Check `dist` folder size (should be reasonable)

### 4. Test Production Build
```bash
npm run build
npm run preview
```

---

## Recommended: Vercel

**Why Vercel?**
- Best developer experience
- Zero configuration needed
- Fastest deployment
- Best performance
- Free custom domain with SSL

**Quick Start:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then:
vercel --prod  # For production
```

---

## Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS instructions

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

---

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript/ESLint errors

### Environment Variables Not Working
- Ensure variables start with `VITE_` prefix
- Redeploy after adding variables
- Check variable names match exactly

### Routing Issues
- For SPA routing, configure redirects (Vercel/Netlify auto-handle this)
- For GitHub Pages, ensure base path is set correctly

---

## Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Code Splitting**: Vite handles this automatically
3. **Lazy Loading**: Already implemented in React
4. **CDN**: All platforms provide CDN automatically

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
