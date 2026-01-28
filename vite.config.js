import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/windows_portfolio/', // Uncomment for GitHub Pages, keep commented for Netlify/Vercel
})
