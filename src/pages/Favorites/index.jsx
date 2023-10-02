import outfitImage from "../../assets/outfit.png";

import { SecondHeader } from "../../components/SecondHeader";
import { BoxCupom } from "../../components/BoxCupom";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Favorites() {
  return (
    <Container>
      <SecondHeader />
      <h3>FAVORITOS</h3>

      <Main>
        <BoxCupom />
        <div className="DivCatalog">
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" />
          <ShowOutfit image={ outfitImage } title="Camisa Polo John John Frisos Masculina" price="79,00" promotion="99,00" />
        </div>

        <Footer />
      </Main>
    </Container>
  )
}