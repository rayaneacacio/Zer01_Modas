import { Routes, Route } from "react-router-dom";

import { ShoppingCart } from "../pages/ShoppingCart";

export function PayRoutes() {
  return (
    <Routes>
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
    </Routes>
  )
}