import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";
import { useProducts } from "./products";

export const ShoppingContext = createContext({});

function ShoppingProvider({ children }) {
  const [ cartBuy, setCartBuy ] = useState({ products: [], length: 0, price: "R$ 00,00" }); //produtos no carrinho de compras;
  const [ chosenProductsInCart, setChosenProductsInCart ] = useState([]); //produtos do carrinho selecionado pelos user;
  
  const { findProduct } = useProducts();

  async function addShoppingCart(product_id, size, color) {
    //adiciona o produto no carrinho de compras;
    try {
      const product = await checkExistsInTheShoppingCart(size, color);

      if(product) {
        await updateQuantityProductInShoppingCart(product, "increment");
      } else {
        await api.post("/shopping_cart", { product_id, size, color_name: color.name, color_hex: color.hex });
      }
      
      findAllProductsShoppingCart();

    } catch {
      alert("erro ao adicionar produto no carrinho");
    }
  }

  async function checkExistsInTheShoppingCart(size, color) {
    //verifica se ja existe no carrinho de compras;
    try {
      const response = await api.post("/shopping_cart/show", { size, color_name: color.name, color_hex: color.hex });
      
      return response.data;

    } catch {
      alert("erro ao buscar produtos no carrinho rota /show");
    }
  }

  async function updateQuantityProductInShoppingCart(product, params) {
    //atualiza a quantidade de um produto no carrinho de compras;
    try {
      if(params == "increment") {
        await api.patch("/shopping_cart/patch", { product, increment: params });
      } else {
        await api.patch("/shopping_cart/patch", { product, decrement: params });
      }

      await findAllProductsShoppingCart();
      await calculateValueShoppingCart(chosenProductsInCart);

    } catch(error) {
      console.log(error);
      alert("erro ao alterar quantidade do produto no carrinho de compras");
    }
  }

  async function findAllProductsShoppingCart() {
    //retorna todos os produtos do carrinho de compras;
    try {
      const response = await api.get("/shopping_cart/index");
      const products = [];

      for(let index of response.data) {
        const { newProduct } = await findProduct({ id: index.product_id });
        const img = await api.get(`/products_images/show?product_id=${ index.product_id }&color_hex=${ index.color_hex.replace("#", "") }`);

        index.name = newProduct[0].name;
        index.price = newProduct[0].price;
        index.img = img.data.image;

        products.push(index);
      };

      setCartBuy(prevState => { return {...prevState, products: products }});
      return products;

    } catch(error) {
      console.log(error);
      alert("erro ao buscar produtos no carrinho rota /index");
    }
  }

  async function removeShoppingCart(product_id, size, color_name, color_hex) {
    //remove o produto do carrinho de compras;
    try {
      await api.post("/shopping_cart/delete", { product_id, size, color_name, color_hex }); //remover no banco de dados

      const newArrayProductsInCart = [];

      for(const product of chosenProductsInCart) {
        if(product.color_hex != color_hex && product.size != size) {
          newArrayProductsInCart.push(product);
        }
      } //remover na lista de compras;

      await findAllProductsShoppingCart();
      setChosenProductsInCart(newArrayProductsInCart);

    } catch(error) {
      console.log(error);
      alert("erro ao remover produto do carrinho");
    }
  }

  async function calculateValueShoppingCart(products) {
    //calcular valor da compra;
    let totalPrice = 0;
    let length = 0;

    for(const product of products) {
      const product_color = {
        name: product.color_name,
        hex: product.color_hex
      }

      const response = await checkExistsInTheShoppingCart(product.size, product_color);

      let price = product.price.replace(/[^0-9,]/g, "");
      price = parseFloat(price.replace(",", "."));
      totalPrice = totalPrice + (Number(price) * response.quantity);

      length = length + response.quantity;
    }

    totalPrice = Number(totalPrice.toFixed(2));
    totalPrice = Number(totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    setCartBuy(prevState => { return {...prevState, price: totalPrice, length: length }});
  }

  useEffect(() => {
    (async() => {
  	  await calculateValueShoppingCart(chosenProductsInCart);
    })();

  }, [ chosenProductsInCart ]);

  return (
    <ShoppingContext.Provider value={{ cartBuy, setCartBuy, addShoppingCart, findAllProductsShoppingCart, removeShoppingCart, updateQuantityProductInShoppingCart, chosenProductsInCart, setChosenProductsInCart }}>
      { children }
    </ShoppingContext.Provider>
  )
}

function useShopping() {
  const context = useContext(ShoppingContext);
  return context;
}

export { ShoppingProvider, useShopping }