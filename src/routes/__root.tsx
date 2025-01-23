import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <Header />

      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
