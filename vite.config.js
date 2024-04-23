import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
  },
});
