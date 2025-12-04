import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore markdown files
    "**/*.md",
  ]),
  {
    rules: {
      // Disable Tailwind class name suggestions (causes false positives in v4)
      "@tailwindcss/classnames-order": "off",
      "@tailwindcss/enforces-shorthand": "off",
      "@tailwindcss/no-contradicting-classname": "off",
      // Disable React strict mode warnings for valid patterns
      "react-compiler/react-compiler": "off",
    },
  },
]);

export default eslintConfig;
