import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { PayRoutes } from "./pay.routes";

import { resizeLayout } from "../scripts/resize-layout";

export function Routes() {
  resizeLayout();

  return (
    <BrowserRouter>
      <AuthRoutes />
      <AppRoutes />
      <PayRoutes />
    </BrowserRouter>
  )
}