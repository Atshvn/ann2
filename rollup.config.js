// rollup.config.js
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";

const customResolver = resolve({
  extensions: [
    ".mjs",
    ".js",
    ".jsx",
    ".json",
    ".sass",
    ".scss",
    ".css",
    ".jpg",
    ".png",
    ".svg",
  ],
});
const projectRootDir = path.resolve(__dirname);

export default {
  // ...
  plugins: [
    vue(), //should be the first
    babel(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    alias({
      entries: [
        {
          find: "src",
          replacement: path.resolve(projectRootDir, "src"),
          // OR place `customResolver` here. See explanation below.
        },
      ],
      customResolver,
    }),
    resolve(),
  ],
};
