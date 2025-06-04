import type { Components, Theme } from "@mui/material/styles";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,

      "&.Mui-disabled": {
        backgroundColor: theme.palette.grey[100],
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey[300],
        },
      },
    }),

    input: ({ theme }) => ({
      padding: theme.spacing(0, 1.5),

      ":focus ~ fieldset": {
        borderColor: `${theme.palette.primary.main} !important`,
        borderWidth: "2px",
      },
    }),
  },
};
