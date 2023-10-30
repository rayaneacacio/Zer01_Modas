import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Outfit } from "../pages/Outfit";
import { Favorites } from "../pages/Favorites";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/catalog" element={ <Catalog /> } />
      <Route path="/outfit" element={ <Outfit /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/new" element={ <New /> } />
      <Route path="/edit" element={ <Edit /> } />
    </Routes>
  )
}