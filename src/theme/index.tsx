import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";

import { components } from "./components";
import { palette } from "./palette";

const theme = createTheme({
  components,
  palette,
  typography: {
    fontFamily: "'Barlow', sans-serif",
    fontWeightBold: 500,
  },
});

interface ThemeProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
