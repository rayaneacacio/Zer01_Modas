import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { MdArrowBack } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

import imgPedido from "../../assets/pedido.jpg";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/Cart-Item";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function ShoppingCart() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <div>
        <Button icon={ <MdArrowBack /> } title="Voltar" onClick={ handleBack } />
        <h3> Meu Carrinho </h3>
      </div>

      <Main>
        <div className="info">
          <div>
            <BsTruck />
            <p> FRETE GRATIS EM TODOS PEDIDOS </p>
            <p> Acima de R$ 100,00 </p>
          </div>

          <div>
            <p> DESCONTOS EXCLUSIVOS A PARTIR DO 10° PEDIDO  </p>
            <p> Promoção Compre e Ganhe </p>
          </div>
        </div>
        

        <div className="boxCards">
          <div>
            <Button icon={ <MdRadioButtonUnchecked /> } title="Selecionar tudo" />
            <Button title="Remover" />
          </div>
          <CartItem image={ imgPedido } title="Hang Loose" color="cinza" tamanho="P" preço="59,99" />
          <CartItem image={ imgPedido } title="Camisa Polo John John Frisos Masculina" color="cinza" tamanho="P"/>
          <CartItem image={ imgPedido } title="Camisa Polo John John Frisos Masculina" color="cinza" tamanho="P" />
          <CartItem image={ imgPedido } title="Camisa Polo John John Frisos Masculina" color="cinza" tamanho="P" preço="59,99" />
        </div>

        <div className="compra">
          <h3> Resumo da compra </h3>
          <span> <p> Subtotal (3 itens) </p> <p> <strong> R$ 279,97 </strong> </p> </span>
          <span> <p> Frete </p> <p> Grátis </p> </span>
          <span> <p> Cupom de Desconto </p> <p> <strong> BEMVINDO10 </strong> </p> </span>
          <span> <p> Descontos </p> <p> -R$10 <strong> R$ 269,97 </strong> </p> </span>
          <span className="value"> <h3> Valor Total </h3> <h3> R$ 269,97 </h3> </span>
          <Button title="FINALIZAR COMPRA" />
        </div>

        <Footer />
      </Main>

    </Container>
  )
}