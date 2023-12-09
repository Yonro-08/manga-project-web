import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      types: "/src/types",
      features: "/src/features",
      store: "/src/store",
      hooks: "/src/hooks",
      lib: "/src/lib",
      icons: "/src/icons",
      utils: "/src/utils",
    },
  },
});
