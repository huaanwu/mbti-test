import { defineConfig } from 'vite'

export default defineConfig({
  root: 'www',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 5183,
    host: '0.0.0.0',
    strictPort: false,
    cors: true,
    allowedHosts: true
  }
})
