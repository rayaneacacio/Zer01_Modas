import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Outfit } from "../pages/Outfit";
import { Favorites } from "../pages/Favorites";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import NotFound404 from "../pages/404";

export function AppRoutes() {
  const { isAdmin } = useAuth();

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/catalog" element={ <Catalog /> } />
      <Route path="/outfit" element={ <Outfit /> } />
      <Route path="/favorites" element={ <Favorites /> } />

      {
        isAdmin && <Route path="/new" element={ <New /> } />
      }
      
      {
        isAdmin && <Route path="/edit" element={ <Edit /> } />
      }

      <Route path="*" element={ <NotFound404 /> } />
    
    </Routes>
  )
}