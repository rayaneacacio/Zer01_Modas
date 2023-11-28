import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useShopping } from "../../hooks/shopping";
import { createConfirmationMessage } from "../../scripts/notifications";

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { BsTruck } from "react-icons/bs";

import img_carrinho_vazio from "../../assets/não_encontrado2.png";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/Cart-Item";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function ShoppingCart() {
  const { cartBuy, removeShoppingCart, chosenProductsInCart, setChosenProductsInCart } = useShopping();

  const [ selectAll, setSelectAll ] = useState(false);

  const navigate = useNavigate();

  function handleNavigatePayment() {
    navigate("/payment");
  }

  function handleNavigateToOutfit(product_name) {
    navigate(`/outfit?${product_name}`);
  }

  function handleSelectAll() {
    if(selectAll) {
      setSelectAll(false);
      setChosenProductsInCart([]);
    } else {
      setSelectAll(true);
      setChosenProductsInCart(cartBuy.products);
    }
    
  }

  async function handleRemoveAll() {
    const buttonConfirm = createConfirmationMessage("Remover produtos? ;-;");

    buttonConfirm.addEventListener("click", () => {
      chosenProductsInCart.map(async(product) => {
        await removeShoppingCart(product.product_id, product.size, product.color_name, product.color_hex);
      });

      document.querySelector(".confirmationModal").remove();
      setSelectAll(false);
      setChosenProductsInCart([]);
    });
  }

  useEffect(() => {
    if(cartBuy.products.length == 0) {
      document.querySelector(".boxCards").style.display = "none";
      document.querySelector(".compra").style.display = "none";
      document.querySelector("main").style.gridTemplateAreas = `
      "info info" 
      "img-carrinho-vazio img-carrinho-vazio" 
      "footer footer"`;
    } else {
      document.querySelector(".boxCards").style.display = "block";
      document.querySelector(".compra").style.display = "flex";

      if(window.innerWidth >= 1000) {
        document.querySelector("main").style.gridTemplateAreas = `
        "info info"
        "cards text"
        "footer footer"`;
      }
    }

  }, [ cartBuy ]);

  useEffect(() => {
    if(chosenProductsInCart.length < cartBuy.products.length) {
      setSelectAll(false);

    } else if(chosenProductsInCart.length > 0){
      setSelectAll(true);
    }

  }, [ chosenProductsInCart ]);

  return (
    <Container>
      <SecondHeader />
      <Nav />

      <h3> Meu Carrinho </h3>

      <Main>
        <div className="info">
          <div>
            <BsTruck />
            <p> FRETE GRATIS EM TODOS PEDIDOS </p>
            <p> Acima de R$ 100,00 </p>
          </div>

          <div>
            <p> DESCONTOS EXCLUSIVOS A PARTIR DO 10° PEDIDO </p>
            <p> Promoção Compre e Ganhe </p>
          </div>
        </div>

        <div className="boxCards">
          <div>
            <Button icon={ selectAll ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } title="Selecionar tudo" onClick={ handleSelectAll } />
            <Button title="Remover" onClick={ handleRemoveAll } />
          </div>
          {
            cartBuy.products.length > 0 &&
            cartBuy.products.map((product, index) => (
              <CartItem key={ index } product={ product } onClick={() =>  handleNavigateToOutfit(product.name) } />
            ))
          }
        </div>

        <div className="compra">
          <h3> Resumo da compra </h3>
          <div>
            <span> 
              <p> Subtotal { cartBuy.length == 1 ? "(1 item)" : `(${cartBuy.length} itens)` } </p> 
              <p> <strong> { cartBuy.price } </strong> </p> 
            </span>

            {/* <span> <p> Frete </p> <p> Grátis </p> </span> */}

            <span> <p> Cupom de Desconto: </p> <input type="text" className="inputCupom" placeholder="APLICAR CUPOM" /> </span>

            {/* <span> <p> Descontos </p> <p> -R$10 <strong> R$ 269,97 </strong> </p> </span> */}

          </div>
          <span className="value"> <h3> Valor Total </h3> <h3> { cartBuy.price } </h3> </span>
          <Button title="FINALIZAR COMPRA" onClick={ handleNavigatePayment } />
        </div>

        {
          cartBuy.products.length == 0 &&
          <div className="img-carrinho-vazio">
            <img src={ img_carrinho_vazio } alt="" />
          </div>
        }
        
        <Footer />
      </Main>

    </Container>
  )
}