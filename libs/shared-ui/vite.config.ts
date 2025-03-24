import path from "path";
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-preserve-directives";
import tailwindcss from "@tailwindcss/vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    minify: false,
    copyPublicDir: false,
    rollupOptions: {
      external: Object.keys(pkg.dependencies || {}),
      // external: (id) =>
      //   /^@radix-ui\/react-/.test(id) ||
      //   ["react", "react/jsx-runtime", "react-dom"].includes(id),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.app.json" }),
    preserveDirectives(),
    tailwindcss(),
    libInjectCss(),
  ],
});
