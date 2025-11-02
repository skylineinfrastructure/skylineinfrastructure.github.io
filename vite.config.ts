import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The 'base' path should match your GitHub repository name.
  // For example, if your repo URL is https://github.com/your-username/skyline-app,
  // the base path should be '/skyline-app/'.
  base: '/skyline-app/',
})