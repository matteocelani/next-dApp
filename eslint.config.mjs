import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

const eslintConfig = [
  // File patterns e ignores
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["node_modules/**", ".next/**", "out/**", "public/**"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  
  // Global settings e language options
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:react/recommended"),
  
  // Plugin configurations
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // Disable unecessary rules for Next.js
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-expressions": ["error", {
        "allowTernary": true,
        "allowShortCircuit": true
      }],
      
      // Typescript
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      
      // General
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "warn",
      
      // Restricts `./` and `../` imports to enforce consistent use of absolute imports with aliases.
      "no-restricted-imports": ["error", {
        patterns: [
          "./*",
          "../*"
        ]
      }],

      // Enforce import order to group imports by type and path.
      "import/order": ["warn", {
        groups: [
          "builtin",
          "external",
          "internal"
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          },
          {
            pattern: "next/**",
            group: "external",
            position: "before"
          },
          {
            pattern: "@rainbow-me/**",
            group: "external",
            position: "after"
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "react-icons/**",
            group: "external",
            position: "after"
          },
          {
            pattern: "@/lib/constants/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/lib/types/**",
            group: "internal",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }]
    }
  }
];

export default eslintConfig;