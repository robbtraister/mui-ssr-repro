import type { Components, Theme } from "@mui/material/styles";

export const MuiLink: Components<Theme>["MuiLink"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // use a transparent border to create space for when adding the focus border
      border: "1px solid transparent",
      color: theme.palette.primary.main,
      outline: "none",
      textDecoration: "none",

      ":focus-visible": {
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
        margin: "-1px",
      },
    }),
  },
};
