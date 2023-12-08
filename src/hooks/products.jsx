import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { useAuth } from "./auth";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  const { SignOut } = useAuth();
  
  const [ allProducts, setAllProducts ] = useState([]); //todos os produtos encontrados;
  const [ lastViewedProduct, setLastViewedProduct ] = useState({}); //ultimo produto visualizado;
  const [ favorites, setFavorites ] = useState([]); //produtos favoritos;
  const [ loadingProducts, setLoadingProducts ] = useState(false);

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

        if(imgs.data.length > 0) {
          product.img = imgs.data[0].image;
        }

        array.push(product);
      };

      setAllProducts(array);
      
    } catch(error) {
      console.log(error);
    }
    
  }

  async function searchProducts({ name, id, cancelToken }) {
    try {
      //retorna uma lista de produtos;
      let response = null;
      let products = [];

      if(name == "") {
        return [];
      }

      setAllProducts([]);
      setLoadingProducts(true);

      if(isNaN(id)) {
        response = await api.post("/products/show", { name }, { cancelToken });
      } else {
        response = await api.post("/products/show", { id }, { cancelToken });
      }

      if(response.data.length > 0) {
        for(let product of response.data) {
          const imgs = await api.get(`/products_images/index?product_id=${ product.id }`);
          product.img = imgs.data[0].image;

          products.push(product);
        };
      }

      setAllProducts(products);
      setLoadingProducts(false);
      return products;

    } catch(error) {
      console.log(error);
    }
  }

  async function findProduct({ name, id }) {
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

  async function insertFavorite(product) {
    try {
      await api.post(`/products_favorites?product_id=${ product.id }&category=${ product.category }`);
      await findAllFavorites();

    } catch(error) {
      if(error) {
        alert(error);
      } else {
        alert("erro ao adicionar produto em favoritos");
      }
      
    }
  }

  async function findIfIsFavorite(product) {
    //verificar se um produto está na lista de favoritos do usuário;
    try {
      const response = await api.get(`/products_favorites/show?product_id=${ product.id }`);
      
      if(response.data == false) {
        return false;
      }

      return true;

    } catch(error) {
      if(error) {
        alert("erro ao buscar produto em products_favorites");
      }
      
    }
  }

  async function removeFavorite(product) {
    try {
      await api.delete(`/products_favorites/delete?product_id=${ product.id }`);
      await findAllFavorites();

    } catch(error) {
      if(error) {
        alert(error);
      } else {
        alert("erro ao remover produto de favoritos");
      }
      
    }
  }

  async function findAllFavorites() {
    //buscar a lista de todos os produtos favoritos do user;
    try {
      const response = await api.get("/products_favorites/index");
      const products = [];

      for(let fav of response.data) {
        const { newProduct } = await findProduct({ id: fav.product_id });
        const imgs = await api.get(`/products_images/index?product_id=${ fav.product_id }`);

        fav.name = newProduct[0].name;
        fav.price = newProduct[0].price;
        fav.img = imgs.data[0].image;

        products.push(fav);
      };

      setFavorites(products);
      return products;
    
    } catch(error) {
      if(error) {
        console.log(error, error.response.data.message);

        if(error.response.data.message == "JWT Token inválido") {
          await SignOut();
          return;
        }

        alert("erro ao lista favoritos");
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
    <ProductsContext.Provider value={{ allProducts, setAllProducts, lastViewedProduct, createProduct, findProductsByCategory, findProduct, deleteProducts, setLastViewedProductStorage, updateProduct, searchProducts,findPromotions, favorites, setFavorites, insertFavorite, findIfIsFavorite, removeFavorite, findAllFavorites, loadingProducts, setLoadingProducts }}>
      { children }
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };