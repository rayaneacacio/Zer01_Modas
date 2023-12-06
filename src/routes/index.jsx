import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Outfit } from "../pages/Outfit";
import { Favorites } from "../pages/Favorites";
import { New } from "../pages/New";
import { EditProduct } from "../pages/EditProduct";
import { Signature } from "../pages/Signature";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Payment } from "../pages/Payment";
import NotFound404 from "../pages/404";
import { Profile } from "../pages/Profile";
import { EditCupons } from "../pages/EditCupons";
import { AllOrders } from "../pages/AllOrders";
import { ViewOrder } from "../pages/ViewOrder";
import { Cards } from "../pages/Cards";

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
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/viewOrder" element={ <ViewOrder /> } />
        <Route path="/orders" element={ <AllOrders /> } />
        <Route path="/mycards" element={ <Cards /> } />
        
        {
          isAdmin &&
          <Route path="/cupons" element={ <EditCupons /> } />
        }

        {
          isAdmin && <Route path="/new" element={ <New /> } />
        }
        
        {
          isAdmin && <Route path="/edit_product" element={ <EditProduct /> } />
        }

        <Route path="/shopping-cart" element={ <ShoppingCart /> } />
        <Route path="/payment" element={ <Payment /> } />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  )
}