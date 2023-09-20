import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Catalog } from "../pages/Catalog";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
      <Route path="/catalog" element={ <Catalog /> } />
    </Routes>
  )
}