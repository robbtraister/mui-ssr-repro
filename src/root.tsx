import type { ReactNode } from "react";
import { Fragment } from "react";
import { Links, Outlet, Scripts, ScrollRestoration } from "react-router";

import * as sx from "./styles/root.sx"
import { ThemeProvider } from "./theme";

const Shell =
  typeof window === "undefined"
    ? ({ children }: { children: ReactNode }) => (
        <sx.Root className="noscript">
          <body>
            <sx.App id="root">{children}</sx.App>
          </body>
        </sx.Root>
      )
    : Fragment;

export default function App() {
  return (
    <Shell>
      <Links />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
      <ScrollRestoration />
      {/* need scripts for client-side token handler */}
      <Scripts />
    </Shell>
  );
}
