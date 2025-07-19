// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // Adds support for the paths defined in tsconfig.json
  ],
  assetsInclude: ["**/*.md"], // Allow markdown files to be included as assets
});
