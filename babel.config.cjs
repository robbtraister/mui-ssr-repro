module.exports = {
  presets: ["@babel/preset-typescript"],
  plugins: [
    [
      "@emotion",
      {
        importMap: Object.fromEntries(
          ["@mui/material", "@mui/material/styles", "@mui/system"].map(
            (pkg) => [
              pkg,
              {
                styled: {
                  canonicalImport: ["@emotion/styled", "default"],
                  styledBaseImport: [pkg, "styled"],
                },
              },
            ]
          )
        ),
      },
    ],
  ],
  sourceMaps: true,
};
