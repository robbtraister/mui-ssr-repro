import type { Components, Theme } from "@mui/material/styles";

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    "*": {
      boxSizing: "border-box",
      fontFamily: "Barlow, arial, helvetica, sans-serif",
    },

    button: {
      margin: 0,
    },

    input: {
      margin: 0,
    },
  },
};
