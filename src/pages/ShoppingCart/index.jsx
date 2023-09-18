import { useNavigate } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi";

import imgPedido from "../../assets/pedido.jpg";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/Cart-Item";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function ShoppingCart() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
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
          <HiOutlineTruck />
          FRETE GRATIS EM TODOS PEDIDOS
          Acima de R$ 100,00
        </div>

        <div className="info">
          DESCONTOS EXCLUSIVOS A PARTIR DO 10° PEDIDO 
          Promoção Compre e Ganhe
        </div>

        <CartItem image={ imgPedido } title="Hang Loose" color="cinza" tamanho="P" preço="59,99" />
        <CartItem image={ imgPedido } title="Camisa Polo John John Frisos Masculina" color="cinza" tamanho="P" preço="59,99" />

        <div className="compra">
          <h3> Resumo da compra </h3>
          <span> <p> Subtotal (3 itens) </p> <p> <strong> R$ 279,97 </strong> </p> </span>
          <span> <p> Frete </p> <p> Grátis </p> </span>
          <span> <p> Cupom de Desconto </p> <p> <strong> BEMVINDO10 </strong> </p> </span>
          <span> <p> Descontos </p> <p> -R$10 <strong> R$ 269,97 </strong> </p> </span>
          <span className="value"> <h3> Valor Total </h3> <h3> R$ 269,97 </h3> </span>
        </div>

        <Button title="FINALIZAR COMPRA" />

        <Footer />
      </Main>

    </Container>
  )
}