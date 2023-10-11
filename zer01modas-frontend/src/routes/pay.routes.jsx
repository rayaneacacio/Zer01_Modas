import { Routes, Route } from "react-router-dom";

import { ShoppingCart } from "../pages/ShoppingCart";
import { Payment } from "../pages/Payment";

export function PayRoutes() {
  return (
    <Routes>
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
      <Route path="/payment" element={ <Payment /> } />
    </Routes>
  )
}