# Netlify Deployment Guide

## Quick Deploy Steps

### Option 1: Deploy via Netlify Dashboard (Recommended - Easiest)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign in with your GitHub account

3. **Create a new site**:
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Authorize Netlify to access your GitHub account
   - Select your repository: `windows_portfolio`

4. **Configure build settings** (Netlify should auto-detect, but verify):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **"Show advanced"** if you need to set these manually

5. **Add Environment Variables**:
   - Click **"Show advanced"** → **"New variable"**
   - Add these three variables:
     - `VITE_EMAILJS_SERVICE_ID` = `service_8pgbwne`
     - `VITE_EMAILJS_TEMPLATE_ID` = `template_awt4vmc`
     - `VITE_EMAILJS_PUBLIC_KEY` = `lRk8ABToyJXmdIGqW`

6. **Deploy**:
   - Click **"Deploy site"**
   - Wait 2-3 minutes for the build to complete

7. **Your site is live!**
   - Netlify will provide a URL like: `https://random-name-123.netlify.app`
   - You can customize it in **Site settings** → **Change site name**

---

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```
   (This will open your browser to authenticate)

3. **Initialize and deploy**:
   ```bash
   netlify init
   ```
   - Follow the prompts
   - Choose "Create & configure a new site"
   - Select your team
   - Site name: (press Enter for random name or type your preferred name)

4. **Add environment variables**:
   ```bash
   netlify env:set VITE_EMAILJS_SERVICE_ID service_8pgbwne
   netlify env:set VITE_EMAILJS_TEMPLATE_ID template_awt4vmc
   netlify env:set VITE_EMAILJS_PUBLIC_KEY lRk8ABToyJXmdIGqW
   ```

5. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

---

## Configuration Files

✅ **netlify.toml** - Already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects (for React Router)

✅ **vite.config.js** - Updated (base path removed for Netlify)

---

## Custom Domain Setup

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions:
   - Add a CNAME record pointing to your Netlify site
   - Or add an A record (for apex domain)

---

## Automatic Deployments

Netlify automatically deploys when you push to your main branch!

- **Production:** Deploys from `main` branch
- **Preview:** Creates preview deployments for pull requests

---

## Environment Variables

Your EmailJS variables are already configured in `.env` file. Make sure to add them in Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add each variable:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

---

## Troubleshooting

### Build Fails
- Check Node version (Netlify uses Node 18 by default)
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`

### Environment Variables Not Working
- Make sure variables start with `VITE_` prefix
- Redeploy after adding variables
- Check variable names match exactly

### 404 Errors on Routes
- The `netlify.toml` already has redirects configured
- If issues persist, check the redirects section

---

## Benefits of Netlify

✅ **Free tier** with generous limits
✅ **Automatic HTTPS**
✅ **Global CDN**
✅ **Form handling** (if needed)
✅ **Split testing**
✅ **Custom domain** with SSL
✅ **Preview deployments** for PRs
✅ **Environment variables** support

---

## Quick Reference

```bash
# Install CLI (one time)
npm install -g netlify-cli

# Login (one time)
netlify login

# Deploy
netlify deploy --prod

# View site
netlify open
```

---

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/
