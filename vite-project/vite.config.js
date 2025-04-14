import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,      // Listen on all network interfaces
    port: 4173,     // Default preview port
    allowedHosts: 'all'  // Allow requests from any host
  }
})