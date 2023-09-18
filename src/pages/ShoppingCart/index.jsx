import { useNavigate } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
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
        <button onClick={ handleBack }>
          <MdArrowBack size={ 30 } />
          Voltar
        </button>
        <h3> Meu Carrinho </h3>
      </div>

      <Main>
        <div>
          <HiOutlineTruck />
          FRETE GRATIS EM TODOS PEDIDOS
          Acima de R$ 100,00
        </div>

        <div>
          DESCONTOS EXCLUSIVOS A PARTIR DO 10° PEDIDO 
          <br></br>
          Promoção Compre e Ganhe
        </div>

        <span>
          <h3> Resumo da compra </h3>
          <p> Subtotal (3 itens) <strong> R$ 279,97 </strong> </p>
          <p> Frete <p> Grátis </p> </p>
          <p> Cupom de Desconto <strong> BEMVINDO10 </strong> </p>
          <p> Descontos <p> -R$10 <strong> R$ 269,97 </strong> </p> </p>
          <h3> Valor Total <p> R$ 269,97 </p> </h3>
          <Button title="FINALIZAR COMPRA" />
        </span>
      </Main>
      
      <Footer />
    </Container>
  )
}