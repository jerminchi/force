import { Match } from "found"
import { AppRouteConfig } from "../Route"

export const findCurrentRoute = (match: Match): AppRouteConfig => {
  const { route: baseRoute, routes, routeIndices } = match ?? {}

  if (!routeIndices || routeIndices.length === 0) {
    return baseRoute
  }

  let remainingRouteIndicies = [...routeIndices]
  let route = routes[remainingRouteIndicies.shift()!]

  while (remainingRouteIndicies.length > 0 && route.children) {
    route = route.children[remainingRouteIndicies.shift()!]
  }

  if (!route) {
    route = baseRoute
  }

  return route
}
