import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={ <SignIn /> } />
    </Routes>
  )
}