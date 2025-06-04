import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

const noExternalPatterns = [
  /^([./#]|virtual:)/,
];

export default defineConfig(({ command, mode, isSsrBuild }) => {
  return {
    build: {
      assetsDir: "dist",
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        external: isSsrBuild
          ? (src) => !noExternalPatterns.some((pattern) => pattern.test(src))
          : undefined,
        input: isSsrBuild ? "virtual:react-router/server-build" : undefined,
      },
    },
    plugins: [
      babel({
        include: `${import.meta.dirname}/**`,
        exclude: /\/node_modules\//,
        filter: /\.tsx?$/,
        babelConfig: {
          configFile: "./babel.config.cjs",
        },
      }),
      reactRouter(),
    ],
    server: {
      port: Number(process.env.PORT) || 8080,
    },
    ssr: {
      external: true,
      noExternal: mode === "production" ? noExternalPatterns : undefined,
    },
  };
});
