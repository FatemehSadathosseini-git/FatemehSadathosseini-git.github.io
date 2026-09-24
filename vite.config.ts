import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset URLs so the built site works on GitHub Pages
  // (both user sites like username.github.io and project sites).
  base: './',
  plugins: [react()],
})
