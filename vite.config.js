import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: "**/*.md",
  preview: {
    host: true,
    port:8080
  }
})
