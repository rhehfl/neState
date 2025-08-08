import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  target: "es2018",
  external: ["react", "react-dom"],
  skipNodeModulesBundle: true,
});
