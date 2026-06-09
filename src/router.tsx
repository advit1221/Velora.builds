import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import { Home } from "@/pages/Home";
import ContactPage from "@/components/velora/inquiry";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const inquiryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inquiry",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  inquiryRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}