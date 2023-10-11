import { Routes, Route } from "react-router-dom";

import { Signature } from "../pages/Signature";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={ <Signature /> } />
    </Routes>
  )
}