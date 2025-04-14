import { defineConfig } from 'vite'

export default defineConfig({
  // your existing config
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['test-6d9n.onrender.com']
  }
})