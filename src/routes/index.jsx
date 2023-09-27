import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { PayRoutes } from "./pay.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <AppRoutes />
      <PayRoutes />
    </BrowserRouter>
  )
}