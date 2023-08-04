import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
    }),
    tsconfigPaths(),
  ],
});
