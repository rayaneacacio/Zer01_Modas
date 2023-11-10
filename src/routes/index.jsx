import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Outfit } from "../pages/Outfit";
import { Favorites } from "../pages/Favorites";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Signature } from "../pages/Signature";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Payment } from "../pages/Payment";
import NotFound404 from "../pages/404";

export function Zer01ModasRoutes() {
  const { isAdmin } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Signature /> } />
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

        <Route path="/shopping-cart" element={ <ShoppingCart /> } />
        <Route path="/payment" element={ <Payment /> } />

        <Route path="*" element={ <NotFound404 /> } />
      </Routes>
    </BrowserRouter>
  )
}