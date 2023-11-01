import { createContext, useContext } from "react";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={{}}>
      { children }
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };