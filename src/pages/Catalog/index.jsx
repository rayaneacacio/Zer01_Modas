import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LiaAngleLeftSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";

import outfitImage from "../../assets/pedido.jpg";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Catalog() {

  const navigate = useNavigate();

  function navigateBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <Button icon={ <LiaAngleLeftSolid size={ 20 } /> } onClick={ navigateBack } />     
      <Button icon={ <FiSearch size={ 30 } /> } className="buttonSearch" />

      <Nav />

      <Main>
        <div>
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
        </div>

        <Footer />
      </Main>
    </Container>
  )
}