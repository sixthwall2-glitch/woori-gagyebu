import { build } from "esbuild";
import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
mkdirSync("www/icons", { recursive: true });
await build({ entryPoints: ["src/main.js"], bundle: true, format: "esm", minify: true, target: ["es2020", "safari15"], outfile: "www/app.js", logLevel: "info" });
cpSync("src/index.html", "www/index.html");
cpSync("src/manifest.webmanifest", "www/manifest.webmanifest");
writeFileSync("www/sw.js", readFileSync("src/sw.js", "utf8").replace("__BUILD__", Date.now().toString(36)));
cpSync("assets/icons", "www/icons", { recursive: true });
