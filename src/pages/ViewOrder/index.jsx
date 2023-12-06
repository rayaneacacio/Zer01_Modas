import { useState } from "react";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import img_pedido from "../../assets/pedido.jpg";

import { SecondHeader } from "../../components/SecondHeader";
// import { Stars } from "../../components/Stars";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Container, Main } from "./style";

export function ViewOrder() {
  const [ score, setScore ] = useState(0);

  function handleSelectButton(indexButtons) {
    // Array.from(document.querySelectorAll(".comment div button")).map(button => {
    //   button.icon = RiStarSLine;

    //   for(let i = 0; i <= indexButtons; i++) {
    //     console.log(indexButtons)
    //     button.icon = <RiStarSFill />;
    //   }
    // });
    console.log(indexButtons)
    setScore(indexButtons);
  }

  return (
    <Container>
      <SecondHeader />
      <h3> Meu Pedido </h3>

      <Main>
        <div>
          <div className="value">
            <span> 100 </span>
            <span> 04/12/2023 </span>
            <span> PIX </span>
            <span> R $2,00 </span>
          </div>

          <div className="more">
            <img src={ img_pedido } alt="" />
            <h3> Camiseta Comfort Estonada Com Estampa </h3>
            <div>
              <span><strong> ID: </strong> 100</span>
              <span><strong> COR: </strong> AZUL</span>
              <span><strong> TAMANHO: </strong> G</span>
              <span><strong> VALOR: </strong> R$40,00</span>
              <span></span>
            </div>
          </div>

          <div className="comment">
            <h3> Avaliação </h3>
            <h2> escreva um comentário </h2>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <div style={{ display: "flex" }}>
              { Array.from({ length: score }, (_, index) => (<RiStarSFill key={ index } onClick={() => setScore(index+1) } />)) }
              { Array.from({ length: 5 - score }, ( _, index) => (<RiStarSLine key={ index } onClick={() => setScore(index+1) } />)) }
              {/* <Button icon={ <RiStarSLine /> } onClick={() => handleSelectButton(1) } />
              <Button icon={ <RiStarSLine /> } onClick={() => handleSelectButton(2) } />
              <Button icon={ <RiStarSLine /> } onClick={() => handleSelectButton(3) } />
              <Button icon={ <RiStarSLine /> } onClick={() => handleSelectButton(4) } />
              <Button icon={ <RiStarSLine /> } onClick={() => handleSelectButton(5) } /> */}
            </div>

            <Button className="buttonComment" title="AVALIAR" />
          </div>
        </div>

        <Footer />
      </Main>
    </Container>
  )
}