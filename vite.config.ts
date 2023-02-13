import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation, {
  VitePluginFederationOptions,
} from "@originjs/vite-plugin-federation";
import { dependencies } from "./package.json";

const federationConfig: VitePluginFederationOptions = {
  name: "host",
  filename: "remoteEntry.js",
  exposes: {
    "./store": "./src/store",
  },
  remotes: {
    remoteApp: "http://localhost:3001/dist/assets/remoteEntry.js",
    host: "http://localhost:3000/dist/assets/remoteEntry.js",
  },
  shared: {
    react: {
      version: dependencies.react,
    },
    "react-dom": {
      version: dependencies["react-dom"],
    },
    mobx: {
      version: dependencies["mobx"],
    },
    "mobx-react-lite": {
      version: dependencies["mobx-react-lite"],
    },
  },
};

function getPlugins(enableFederation = true) {
  const plugins = [react()];

  if (enableFederation) {
    // @ts-expect-error -- TODO: check if vite-plugin-federation has PR for
    // incorrect types, because this is valid
    plugins.push(federation(federationConfig));
  }

  return plugins;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: getPlugins(),
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
  },
});
