import { mergeConfig } from "vite";

import baseConfig from "../../vite.config";

export default mergeConfig(baseConfig, {
  build: {
    outDir: "../../dist/lavalamp",
  },
  // lavalamp is served from the root of the site
  // so we need to set the base to /lavalamp/
  base: "/lavalamp/",
});
