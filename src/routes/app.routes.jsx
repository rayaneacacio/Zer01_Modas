import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
    </Routes>
  )
}