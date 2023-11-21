import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProducts } from "../../hooks/products";
import { createConfirmationMessage } from "../../scripts/notifications";

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { BsTruck } from "react-icons/bs";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/Cart-Item";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function ShoppingCart() {
  const { cartBuy, removeShoppingCart } = useProducts();

  const [ isSelect, setIsSelect ] = useState(false);

  const navigate = useNavigate();

  function handleNavigatePayment() {
    navigate("/payment");
  }

  function handleNavigateToOutfit(product_name) {
    navigate(`/outfit?${product_name}`);
  }

  function handleSelectAll() {
    if(isSelect) {
      setIsSelect(false);
    } else {
      setIsSelect(true);
    }
    
  }

  async function handleRemoveAll() {
    const buttonConfirm = createConfirmationMessage("Tem certeza que deseja remover tudo? ;-;");

    buttonConfirm.addEventListener("click", () => {
      cartBuy.products.map(async(product) => {
        await removeShoppingCart(product.product_id, product.size, product.color_name, product.color_hex);
      });

      document.querySelector(".confirmationModal").remove();
      setIsSelect(false);
    });
  }

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
            <Button icon={ isSelect ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } title="Selecionar tudo" onClick={ handleSelectAll } />
            <Button title="Remover" onClick={ handleRemoveAll } />
          </div>
          {
            cartBuy.products.length > 0 &&
            cartBuy.products.map((product, index) => (
              <CartItem key={ index } product={ product } select={ isSelect } onClick={() =>  handleNavigateToOutfit(product.name) } />
            ))
          }
        </div>

        <div className="compra">
          <h3> Resumo da compra </h3>
          <div>
            <span> 
              <p> Subtotal { `(${cartBuy.length} itens)` } </p> 
              <p> <strong> { cartBuy.totalPrice } </strong> </p> 
            </span>
            {/* <span> <p> Frete </p> <p> Grátis </p> </span>
            <span> <p> Cupom de Desconto </p> <p> <strong> BEMVINDO10 </strong> </p> </span>
            <span> <p> Descontos </p> <p> -R$10 <strong> R$ 269,97 </strong> </p> </span> */}
          </div>
          <span className="value"> <h3> Valor Total </h3> <h3> { cartBuy.totalPrice } </h3> </span>
          <Button title="FINALIZAR COMPRA" onClick={ handleNavigatePayment } />
        </div>

        <Footer />
      </Main>

    </Container>
  )
}