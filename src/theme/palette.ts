import type { PaletteOptions as MuiPaletteOptions } from "@mui/material";

const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#282828",
} as const satisfies MuiPaletteOptions["grey"];

export const palette = {
  primary: {
    main: "#ffb35b",
    contrastText: grey[900],
  },

  secondary: {
    main: grey[900],
  },

  grey,

  /* alerts */
  error: {
    main: "#f92222",
  },

  info: {
    main: "#009cde",
  },

  success: {
    main: "#73c742",
  },

  warning: {
    main: "#efd615",
  },
} as const satisfies MuiPaletteOptions;
