import { defineConfig, globalIgnores } from "eslint/config";
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { parserOpts: { plugins: ["jsx", ["typescript", { isTSX: true }]] } },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: nextPlugin.configs["core-web-vitals"].plugins,
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".history/**"]),
]);
