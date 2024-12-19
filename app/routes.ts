import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Define the index route
  index("routes/home.tsx"),

  // Define a route for Redux
  route("redux", "routes/redux.tsx"),
] satisfies RouteConfig;
