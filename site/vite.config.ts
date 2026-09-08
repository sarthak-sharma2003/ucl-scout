import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed at https://sarthak-sharma2003.github.io/ucl-scout/ — a fixed
// subpath, not the domain root, so every built asset must be prefixed with it.
export default defineConfig({
  base: "/ucl-scout/",
  plugins: [react()],
});
