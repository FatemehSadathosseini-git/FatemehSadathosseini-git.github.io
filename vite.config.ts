import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // User site FatemehSadathosseini-git.github.io is served from domain root,
  // so absolute asset URLs are correct. Relative './' base + vite.svg-style
  // absolute links were mixing modes and broke asset resolution on Pages.
  base: '/',
  plugins: [react()],
})
