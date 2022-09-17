import React from "react"
import LoginPage from "../pages/login/LoginPage"
import { getAuthToken } from "../services/auth-token"

type TRestrictedRouteParams = {
  element: JSX.Element
}

const RestrictedRoute = ({ element }: TRestrictedRouteParams) => {
  if (!getAuthToken()) {
    console.log("TOKEN:", getAuthToken())
    return <LoginPage />
  }

  return element
}

export default RestrictedRoute
