import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since your repo is skylineinfrastructure.github.io, it deploys to the root.
  // The base path should be '/'.
  base: '/',
})
