import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { PayRoutes } from "./pay.routes";
import NotFound404 from "../pages/404";

export function Zer01ModasRoutes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <AppRoutes />
      <PayRoutes />
      <Routes>
        <Route path="*" element={ <NotFound404 /> } />
      </Routes>
    </BrowserRouter>
  )
}