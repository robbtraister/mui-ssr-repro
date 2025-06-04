import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

window.document.documentElement.classList.remove("noscript");

startTransition(() => {
  hydrateRoot(
    window.document.getElementById("root")!,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
