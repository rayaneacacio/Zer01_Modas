import { createContext, useContext } from "react";

import { api } from "../services/api";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  async function createProduct({ name, category, price, promotion, description }) {
    try {
      const response = await api.post("/products/", { name, category, price, description });
      const product_id = response.data;

      if(promotion) {
        await api.post("/products_promotions/", { product_id, percentage: promotion });
      }

      return product_id;

    } catch(error) {
      if(error) {
        alert(error.response.data.message);
      } else {
        alert("Ocorreu um erro");
      }
      
    }
  }

  return (
    <ProductsContext.Provider value={{ createProduct }}>
      { children }
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };