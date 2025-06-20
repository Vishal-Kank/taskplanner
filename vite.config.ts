import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@container": path.resolve(__dirname, "src/container"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },
});
