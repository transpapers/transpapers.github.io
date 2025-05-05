/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

// TODO Clean this up you pig.
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [react()],
      test: {
        deps: {
          inline: ["vitest-canvas-mock"],
        },
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "**/.*/**"],
        passWithNoTests: true,
        setupFiles: ["test/vitest-setup.ts"],
        poolOptions: {
          threads: {
            singleThread: true,
          },
        },
      },
    };
  } else if (mode === "test") {
    return {
      plugins: [react()],
      test: {
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "**/.*/**"],
        passWithNoTests: true,
        setupFiles: ["test/vitest-setup.ts"],
        poolOptions: {
          threads: {
            singleThread: true,
          },
        },
      },
    };
  } else if (mode === "e2e") {
    return {
      plugins: [react()],
      test: {
        browser: {
          enabled: true,
          name: "firefox",
        },
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "**/.*/**"],
        passWithNoTests: true,
        setupFiles: ["test/vitest-setup.ts"],
        poolOptions: {
          threads: {
            singleThread: true,
          },
        },
      },
    };
  } else {
    return {};
  }
});
