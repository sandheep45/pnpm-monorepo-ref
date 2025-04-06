# TypeScript Configuration (`tsconfig.json`)

This repository provides a **modular TypeScript configuration** that serves as a **base setup** for different project types.

The setup consists of:

1. **Base Configuration** (`base.json`) → Core settings for all TypeScript projects.
2. **React Configuration** (`react-library.json`) → Extends the base for React projects.
3. **Next.js Configuration** (`nextjs.json`) → Extends the React config for Next.js projects.

Each configuration is designed to be **extended further** for specific project needs.

---

## 📌 Base Configuration (`base.json`)

This serves as the foundation for all TypeScript projects.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "lib": ["ES2022", "DOM"],
    "moduleResolution": "Node",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### **Features**

✔️ **Modern JavaScript support** (`ES2022`)  
✔️ **Node.js compatibility** (`NodeNext`, `moduleResolution: Node`)  
✔️ **Strict type checking** (`strict: true`)  
✔️ **Performance optimizations** (`skipLibCheck`, `isolatedModules`)  
✔️ **Prevents unused variables & parameters**

📌 **This file is meant to be extended, not modified directly.**

---

## 🔹 React Configuration (`react-library.json`)

This extends `base.json` and adds React-specific tweaks.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "allowJs": true,
    "noEmit": true,
    "incremental": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}
```

### **Extensions & Features**

| Field         | Selected Option                   | Purpose                                                      |
| ------------- | --------------------------------- | ------------------------------------------------------------ |
| `extends`     | `"./base.json"`                   | Inherits all base settings.                                  |
| `jsx`         | `"react-jsx"`                     | Enables JSX support for React.                               |
| `allowJs`     | `true`                            | Allows JavaScript (`.js`) files in TypeScript projects.      |
| `noEmit`      | `true`                            | Prevents TypeScript from generating `.js` files.             |
| `incremental` | `true`                            | Improves performance by enabling incremental compilation.    |
| `include`     | `["src/**/*.ts", "src/**/*.tsx"]` | Ensures only TypeScript and JSX files in `src` are included. |

📌 **This config should be used as a reference when customizing React projects.**

---

## 🔹 Next.js Configuration (`next.json`)

This extends `react-library.json` and adds Next.js-specific settings.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./react-library.json",
  "compilerOptions": {
    "target": "es2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### **Extensions & Features**

| Field     | Selected Option                            | Purpose                                            |
| --------- | ------------------------------------------ | -------------------------------------------------- |
| `extends` | `"./react-library.json"`                   | Inherits all settings from the React config.       |
| `target`  | `"es2022"`                                 | Ensures compatibility with modern ES2022 features. |
| `lib`     | `["dom", "dom.iterable", "esnext"]`        | Adds additional DOM typings for Next.js.           |
| `allowJs` | `true`                                     | Allows using `.js` files in the project.           |
| `strict`  | `true`                                     | Enforces strict type checking.                     |
| `module`  | `"esnext"`                                 | Uses the latest ES module system.                  |
| `jsx`     | `"preserve"`                               | Keeps JSX syntax instead of transforming it.       |
| `include` | `["next-env.d.ts", "**/*.ts", "**/*.tsx"]` | Ensures Next.js environment types are included.    |
| `exclude` | `["node_modules"]`                         | Excludes `node_modules` from compilation.          |

📌 **This configuration serves as a base for Next.js projects and should be extended for further customizations.**

---

## 🔄 Extending These Configurations

Each of these configurations is designed to be **extended rather than modified directly**.

To extend them, create a `tsconfig.json` in your project and use:

```json
{
  "extends": "@bb/shared-ts-configs/base.json",
  "compilerOptions": {
    "strict": false,
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"]
    }
  }
}
```

🔹 **Common customizations include:**  
✅ **Loosening strict rules** → `"strict": false`  
✅ **Adding path aliases** → `"paths": { "@components/*": ["components/*"] }`  
✅ **Modifying `include/exclude` rules**

---

## 🚀 Summary

| Config               | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `base.json`          | Core TypeScript settings for all projects. |
| `react-library.json` | Extends `base.json`, adds React support.   |

| `next.json` | Extends `react-library.json`, optimizes for Next.js. |
📌 **Each config should be extended, not modified directly.** Customize your `tsconfig.json` based on project requirements. 🎯
