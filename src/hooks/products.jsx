import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  const [ allProducts, setAllProducts ] = useState([]);

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

  async function findProductsByCategory(category) {
    try {
      const response = await api.get(`/products/index?category=${ category }`);
      const array = [];

      for(let product of response.data) {
        const imgs = await api.get(`/products_images/index?product_id=${ product.id }`);
        product.img = imgs.data[0].image;

        array.push(product);
      };

      setAllProducts(array);
      
    } catch(error) {
      console.log("Ocorreu um erro");
    }
    
  }

  async function findProductById(id) {
    try {
      const product = await api.get(`/products/show?id=${ id }`);
      const images = await api.get(`/products_images/index?product_id=${ id }`);
      const sizes = await api.get(`/products_sizes/index?product_id=${ id }`);
      const details = await api.get(`/products_details/index?product_id=${ id }`);
      const model_details = await api.get(`/products_model_details/index?product_id=${ id }`);

      const response = {
        ...product.data,
        images: images.data,
        sizes: sizes.data,
        details: details.data,
        model_details: model_details.data
      };

      return response;

    } catch(error) {
      console.log(error);
    }
  }

  async function deleteProducts(products_id) {
    try {
      await api.post("/products/delete", { products: products_id });

    } catch(error) {
      if(error) {
        console.error(error);
      } else {
        console.log("erro ao deletar produtos.");
      }
    }
  }

  return (
    <ProductsContext.Provider value={{ allProducts, createProduct, findProductsByCategory, findProductById, deleteProducts }}>
      { children }
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };