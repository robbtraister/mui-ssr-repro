import type { Components, Theme } from "@mui/material/styles";

export const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.25, 2),
    }),
  },
};
