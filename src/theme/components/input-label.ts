import type { Components, Theme } from "@mui/material/styles";

const lineHeight = 23 / 16;
const shrinkScale = 9 / 16;

export const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.spacing(1.75),
      transform: `translate(${theme.spacing(1.5)}, calc((${theme.spacing(5)} - ${lineHeight}em) / 2)) scale(1)`,
    }),
    shrink: ({ theme }) => ({
      transform: `translate(${theme.spacing(1.5)}, -${shrinkScale}em) scale(0.75)`,
    }),
  },
};
