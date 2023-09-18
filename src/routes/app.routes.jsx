import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { ShoppingCart } from "../pages/ShoppingCart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
    </Routes>
  )
}