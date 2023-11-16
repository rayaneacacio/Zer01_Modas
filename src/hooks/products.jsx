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

  async function searchProducts(name, id) {
    //retorna uma lista de produtos;
      let response = null;
      let products = [];

      if(name == "") {
        return [];
      }

      if(isNaN(id)) {
        response = await api.post("/products/show", { name });
      } else {
        response = await api.post("/products/show", { id });
      }

      if(response.data.length > 0) {
        for(let product of response.data) {
          if(product) {
          const imgs = await api.get(`/products_images/index?product_id=${ product.id }`);
          product.img = imgs.data[0].image;

          products.push(product);
          }
        };
      }

      setAllProducts(products);
      return products;
  }

  async function findProduct(name, id) {
    //retorna um produto especifico;
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

      const [promotion, images, sizes, details, model_details] = await Promise.all([
        api.get(`/products_promotions/show?product_id=${ product.id }`),
        api.get(`/products_images/index?product_id=${ product.id }`),
        api.get(`/products_sizes/index?product_id=${ product.id }`),
        api.get(`/products_details/index?product_id=${ product.id }`),
        api.get(`/products_model_details/index?product_id=${ product.id }`)
      ]);

      const response = {
        ...product,
        promotion: promotion.data,
        images: images.data,
        sizes: sizes.data,
        details: details.data,
        model_details: model_details.data
      };

      return { newProduct: response };

    } catch(error) {
      return({ newProduct: undefined, error: error.response.data.message ?? "Nenhum produto encontrado" });
      
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

  async function updateProduct({ id, name, category, price, promotion, description }) {
    try {
      await api.patch(`/products?id=${ id }`, { name, category, price, description });

      if(promotion) {
        await api.post("/products_promotions/delete", { product_id: id });
        await api.post("/products_promotions", { product_id: id, percentage: promotion });
      }

    } catch(error) {
      if(error) {
        console.log(error);
      } else {
        console.log("erro ao atualizar o produto");
      }
      
    }
  }

  async function findPromotions() {
    //retorna todas as promocoes disponiveis;
    try {
      const response = await api.get("/products_promotions/index");
      const products = [];

      if(response.data.length > 0) {
        for(let product of response.data) {
          if(product) {
          const imgs = await api.get(`/products_images/index?product_id=${ product.id }`);
          product.img = imgs.data[0].image;

          products.push(product);
          }
        };
      }

      setAllProducts(products);

    } catch(error) {
      if(error) {
        alert(error);
      } else {
        console.log("erro ao buscar promocoes");
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
    <ProductsContext.Provider value={{ allProducts, setAllProducts, lastViewedProduct, createProduct, findProductsByCategory, findProduct, deleteProducts, setLastViewedProductStorage, updateProduct, searchProducts,findPromotions }}>
      { children }
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };