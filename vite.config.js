import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("/node_modules/three/")) return undefined;
          return id.includes("/postprocessing/") ? "three-postprocessing" : "three";
        }
      }
    }
  }
});
