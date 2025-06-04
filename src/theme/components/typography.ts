import type { Components, Theme } from "@mui/material/styles";

export const MuiTypography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    h1: ({ theme }) => ({
      color: theme.palette.primary.contrastText,
      fontSize: theme.spacing(2.625),
      fontWeight: 500,
      letterSpacing: "0.5px",
      lineHeight: theme.spacing(3),
      margin: 0,
    }),

    subtitle1: ({ theme }) => ({
      color: theme.palette.primary.contrastText,
      fontSize: theme.spacing(1.75),
      fontWeight: 300,
      lineHeight: theme.spacing(2.5),
    }),
  },
};
