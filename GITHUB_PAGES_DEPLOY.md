# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Step 2: Verify Configuration

✅ **vite.config.js** - Already updated with base path: `/windows_portfolio/`
✅ **package.json** - Already has deploy script added

**Important:** If your GitHub repository name is different from `windows_portfolio`, update the `base` path in `vite.config.js` to match your repo name.

### Step 3: Build and Deploy

Run this single command:

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/windows_portfolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click **Save**

### Step 5: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/windows_portfolio/
```

**Note:** It may take a few minutes for GitHub Pages to build and deploy your site.

---

## Updating Your Site

Every time you want to update your deployed site:

```bash
npm run deploy
```

Then wait a few minutes for GitHub Pages to rebuild.

---

## Troubleshooting

### Issue: 404 Error or Blank Page

**Solution:** 
- Make sure the `base` path in `vite.config.js` matches your repository name exactly
- Check that GitHub Pages is set to use the `gh-pages` branch
- Wait 5-10 minutes after deployment for GitHub to process

### Issue: Assets Not Loading

**Solution:**
- Verify the `base` path includes trailing slash: `/windows_portfolio/` (not `/windows_portfolio`)
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Environment Variables Not Working

**Solution:**
- GitHub Pages serves static files only
- Environment variables need to be baked into the build
- Consider using Vercel or Netlify if you need environment variables

**Workaround:** You can hardcode the values in your code for GitHub Pages (not recommended for sensitive data).

---

## Custom Domain (Optional)

If you have a custom domain:

1. Create a file named `CNAME` in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Add CNAME record in your DNS:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

3. Deploy again:
   ```bash
   npm run deploy
   ```

4. Enable custom domain in GitHub Pages settings

---

## Quick Reference

```bash
# Install dependencies (first time only)
npm install

# Install gh-pages (first time only)
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy

# Test build locally before deploying
npm run build
npm run preview
```

---

## Repository Name Changed?

If you rename your repository, update `vite.config.js`:

```js
base: '/your-new-repo-name/',
```

Then redeploy:
```bash
npm run deploy
```

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Vite Static Deploy: https://vitejs.dev/guide/static-deploy.html
