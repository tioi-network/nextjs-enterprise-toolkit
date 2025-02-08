/// <reference types="vitest" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: ["app/**"],
      exclude: ["node_modules/**", "setupTests.ts", "**/*.d.ts", "**/*.config.*", "**/.*", "dist/**"],
    },
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**", "**/.{idea,git,cache,output,temp}/**"],
    include: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
})
