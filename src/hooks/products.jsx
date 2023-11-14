import { createContext, useContext, useEffect, useRef, useState } from "react";

import { api } from "../services/api";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  const [ allProducts, setAllProducts ] = useState([]);
  const [ lastViewedProduct, setLastViewedProduct ] = useState({});

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

  // async function findProductById(id) {
  //   try {
  //     const product = await api.get(`/products/show?id=${ id }`);
  //     const images = await api.get(`/products_images/index?product_id=${ id }`);
  //     const sizes = await api.get(`/products_sizes/index?product_id=${ id }`);
  //     const details = await api.get(`/products_details/index?product_id=${ id }`);
  //     const model_details = await api.get(`/products_model_details/index?product_id=${ id }`);

  //     const response = {
  //       ...product.data,
  //       images: images.data,
  //       sizes: sizes.data,
  //       details: details.data,
  //       model_details: model_details.data
  //     };

  //     return response;

  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  async function findProduct(name, id) {
    try {
      let products = null;
      let product = null;

      if(isNaN(id)) {
        products = await api.post("/products/show", { name });
        product = products.data[0];
      } else {
        products = await api.post("/products/show", { id });
        product = products.data;
      }

      const [images, sizes, details, model_details] = await Promise.all([
        api.get(`/products_images/index?product_id=${ product.id }`),
        api.get(`/products_sizes/index?product_id=${ product.id }`),
        api.get(`/products_details/index?product_id=${ product.id }`),
        api.get(`/products_model_details/index?product_id=${ product.id }`)
      ]);

      const response = {
        ...product,
        images: images.data,
        sizes: sizes.data,
        details: details.data,
        model_details: model_details.data
      };

      return { newProduct: response };

    } catch(error) {
      return({ newProduct: undefined, error: error.response.data.message });
      
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

  function setLastViewedProductStorage(product) {
    sessionStorage.setItem("@zer01modas:product", JSON.stringify(product));
    setLastViewedProduct(product);
  }

  async function updateProduct({ id, name, category, price, description }) {
    try {
      await api.patch(`/products?id=${ id }`, { name, category, price, description });

    } catch(error) {
      if(error) {
        console.log(error);
      } else {
        console.log("erro ao atualizar o produto");
      }
      
    }
  }

  useEffect(() => {
    const product = JSON.parse(sessionStorage.getItem("@zer01modas:product"));
    if(product) {
      setLastViewedProduct(product);
    }

  }, []);

  return (
    <ProductsContext.Provider value={{ allProducts, lastViewedProduct, createProduct, findProductsByCategory, findProduct, deleteProducts, setLastViewedProductStorage, updateProduct }}>
      { children }
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };