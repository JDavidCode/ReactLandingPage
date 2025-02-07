import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      "@tailwindConfig": path.resolve("./", "tailwind.config.ts"),
    },
  },
  optimizeDeps: {
    include: ["@tailwindConfig"],
    needsInterop: ["@tailwindConfig"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  base: "/",
  //server: {
  //  host: "0.0.0.0",
  //  open: false,
  //  port: 5173,
  //},
});
