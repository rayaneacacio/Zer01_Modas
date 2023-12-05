import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useShopping } from "../../hooks/shopping";
import { createConfirmationMessage } from "../../scripts/notifications";
import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { BsTruck } from "react-icons/bs";

import img_carrinho_vazio from "../../assets/não_encontrado2.png";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/Cart-Item";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";
import { Input } from "../../components/Input";

export function ShoppingCart() {
  const { cartBuy, removeShoppingCart, chosenProductsInCart, setChosenProductsInCart, searchCupom, buyPrice, setBuyPrice } = useShopping();

  const [ selectAll, setSelectAll ] = useState(false);
  const [ cupom, setCupom ] = useState({ name: "", discount: "0%", discountValue: "R$ 0,00" });

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

  async function handleAddCupom() {
    if(cupom.name != "") {
        let { discount, message } = await searchCupom((cupom.name).toUpperCase());

        if(discount) {
          calculateValueBuy(discount);
        } else {
          calculateValueBuy();
          createErrorMessage(document.querySelector(".divInputCupom"), message);
        }
    }
  }

  function calculateValueBuy(discount) {
    //calcular o desconto;
    if(discount) {
      let price = cartBuy.price.replace("R$", "");
      price = parseFloat(price.replace(",", "."));

      let discountValue = (discount.replace("%", "")/100) * price;
      let newPrice = price - discountValue;
      
      newPrice = Number(newPrice.toFixed(2));
      newPrice = Number(newPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

      discountValue = Number(discountValue.toFixed(2));
      discountValue = Number(discountValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

      setCupom(prevState => { return {...prevState, discount: discount, discountValue: discountValue }});
      setBuyPrice(newPrice);

    } else {
      setBuyPrice(cartBuy.price);
    }
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

      setBuyPrice(cartBuy.price);

      (async() => {
        await handleAddCupom();
      })();
    }

  }, [ cartBuy ]);

  useEffect(() => {
    if(chosenProductsInCart.length < cartBuy.products.length) {
      setSelectAll(false);

    } else if(chosenProductsInCart.length > 0){
      setSelectAll(true);
    }

  }, [ chosenProductsInCart ]);

  useEffect(() => {
    removeErrorMessage(document.querySelector(".divInputCupom"));

  }, [ cupom ]);

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

            <div className="divCupom"> 
              <p> Cupom de Desconto: </p>
              <span>
                <Input type="text" className="divInputCupom" placeholder="CUPOM" onChange={e => setCupom({ name: e.target.value })} />
                <Button title="APLICAR" onClick={ handleAddCupom } />
              </span>
              
            </div>

            <span> 
              <p> Descontos </p>
              {
                cupom.discount ? 
                <p> <strong> -{ cupom.discountValue } ({ cupom.discount }) </strong> </p>
                :
                <p> <strong> - R$ 0,00 (0%) </strong> </p>
              }
            </span>

          </div>
          <span className="value"> <h3> Valor Total </h3> <h3> { buyPrice } </h3> </span>
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