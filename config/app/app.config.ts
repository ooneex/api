import { AppConfigType } from "./types.ts";

const config: AppConfigType = {
  directories: {
    "root": new URL("../..", import.meta.url).pathname.replace(/\/+$/, ""),
    "config": "config",
    "controllers": "controllers",
    "middlewares": "middlewares",
    "var": "var",
  },
};

export default config;
