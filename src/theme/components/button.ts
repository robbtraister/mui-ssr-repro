import type { Components, Theme } from "@mui/material/styles";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },

  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      fontFamily: "Barlow, arial, helvetica, sans-serif",
      fontWeight: "normal",
      height: theme.spacing(5),
      justifyContent: "flex-start",
      letterSpacing: "0.01em",
      minWidth: "unset",
      padding: theme.spacing(0, 2),
      textTransform: "none",
      whiteSpace: "nowrap",

      ".noscript &:focus": {
        border: `2px solid currentColor`,
        padding: theme.spacing(0, 1.75),
      },
    }),

    text: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      ":hover": {
        backgroundColor: theme.palette.grey[50],
      },
    }),

    textPrimary: ({ theme }) => ({
      color: theme.palette.primary.contrastText,
    }),

    textSecondary: ({ theme }) => ({
      color: theme.palette.primary.main,
      justifyContent: "center",
    }),

    contained: {
      alignSelf: "flex-start",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
};
