import type { Components, Theme } from "@mui/material/styles";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
    }),

    input: ({ theme }) => ({
      height: theme.spacing(5),
      padding: theme.spacing(0, 1.5),
    }),
  },
};
