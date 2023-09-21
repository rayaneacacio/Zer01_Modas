import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";

import outfitImage from "../../assets/pedido.jpg";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Catalog() {
  const [ rangeValue, setRangeValue ] = useState(39);

  const navigate = useNavigate();

  function navigateBack() {
    navigate("/");
  }

  function handleDisplayRange() {
    const divRange = document.querySelector(".range");
    if(divRange.style.display == "none") {
      divRange.style.animation = "toLeft 0.5s forwards";
      divRange.style.display = "flex";
      return
    }
    
    divRange.style.display = "none";
  }

  useEffect(() => {
    const rangeSpan = document.querySelector(".range span");
    rangeSpan.style.left = `${ rangeValue - 5 }%`;

  }, [ rangeValue ]);

  return (
    <Container>
      <Header />
      <Nav />

      <div>
        <Button icon={ <MdArrowBack /> } title="voltar" onClick={ navigateBack } />
        <Button icon={ <BsChevronLeft /> } onClick={ handleDisplayRange } className="buttonDisplayRange" />
        <div className="range">
          <span> 
            <GiPriceTag />
            <p> { rangeValue } </p>
          </span>
          <input type="range" min="0" max="99" onChange={e => setRangeValue(e.target.value) } />
          <Button title="Filtrar $" className="rangeButton" />
        </div>
      </div>

      <Main>
        <div>
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
        </div>

        <Footer />
      </Main>
    </Container>
  )
}