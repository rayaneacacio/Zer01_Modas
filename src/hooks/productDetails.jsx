import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const ProductDetailsContext = createContext({});

function ProductDetailProvider({ children }) {
  const [ productDetails, setProductDetails ] = useState([]);
  const [ modelDetails, setModelDetails ] = useState([]);

  function saveProductDetailsStorage(tags) {
    setProductDetails(tags);
  }

  function saveModelDetailsStorage(tags) {
    setModelDetails(tags);
  }

  async function addDetailsDatabase(product_id) {
    try {
      if(productDetails.length > 0) {
        api.post("/products_details", { product_id, details: productDetails});
      }

      if(modelDetails.length > 0) {
        api.post("/products_model_details", { product_id, model_details: modelDetails});
      }
      
    } catch(error) {
      if(error) {
        console.error(error);
      } else {
        alert.log("Ocorreu um erro");
      }
    }
  }

  async function updateTags(product_id) {
    try {
      await api.delete(`/products_details/delete?product_id=${ product_id }`);
      await api.delete(`/products_model_details/delete?product_id=${ product_id }`);

      await addDetailsDatabase(product_id);

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <ProductDetailsContext.Provider value={{ productDetails, modelDetails, saveProductDetailsStorage, saveModelDetailsStorage, addDetailsDatabase, updateTags }}>
      { children }
    </ProductDetailsContext.Provider>
  )
}

function useProductDetails() {
  const context = useContext(ProductDetailsContext);
  return context;
}

export { ProductDetailProvider, useProductDetails };