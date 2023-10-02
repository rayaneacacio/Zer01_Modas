import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Catalog } from "../pages/Catalog";
import { Outfit } from "../pages/Outfit";
import { Favorites } from "../pages/Favorites";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/catalog" element={ <Catalog /> } />
      <Route path="/outfit" element={ <Outfit /> } />
      <Route path="/favorites" element={ <Favorites /> } />
    </Routes>
  )
}