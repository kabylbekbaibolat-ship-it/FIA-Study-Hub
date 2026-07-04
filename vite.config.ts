import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Deployed as a GitHub Pages *project* site, so production assets are served
// from /FIA-Study-Hub/. Dev/preview stay at the root for convenience.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/FIA-Study-Hub/' : '/',
  plugins: [react()],
}))
