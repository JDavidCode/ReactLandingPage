import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
    ]
  }, 
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  server: {
    host: "0.0.0.0",
    open: true,
    port: 5173,
  },
})
