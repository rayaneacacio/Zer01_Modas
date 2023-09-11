import imgModaFeminina from "../../assets/moda-feminina-secao-promocional.png";
import imgModaMasculina from "../../assets/moda-masculina-secao-promocional.png";
import imgModaInfantil from "../../assets/moda-infantil-secao-promocional.png";
import gifModaÍntima from "../../assets/gif-moda-intima-secao-novidades.gif";
import gifCamisetas from "../../assets/gif-camisetas-secao-novidades.gif";
import gifTenis from "../../assets/gif-tenis-secao-novidades.gif";
import gifJeans from "../../assets/gif-jeans-secao-novidades.gif";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { PromotionalCard } from "../../components/Promotion-card";
import { NoveltyCard } from "../../components/Novelty-card";

import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <Header />
      
      <div className="emptyBox"></div>

      <main>
        <Nav />
        <BoxCupom />
        <Banner />

        <div className="section_promotion">
          <Section title="PROMOÇÕES" />
          <PromotionalCard img_png={ imgModaFeminina } title="FEMININA" promotion="3%" />
          <PromotionalCard img_png={ imgModaMasculina } title="MASCULINA" promotion="50%" />
          <PromotionalCard img_png={ imgModaInfantil } title="INFANTIL" promotion="50%" />
        </div>

        <div className="section_novelty"> 
          <Section title="NOVIDADES" />
          <NoveltyCard className="main-card" $main_card />
          <NoveltyCard className="card2" gif={ gifModaÍntima } title="Moda Íntima" subtitle="ATÉ R$19,00" />
          <NoveltyCard className="card3" gif={ gifCamisetas } title="Camisetas" subtitle="ATÉ R$39,00" />
          <NoveltyCard className="card4" gif={ gifTenis } title="Tênis" subtitle="ATÉ R$59,00" />
          <NoveltyCard className="card5" gif={ gifJeans } title="Jeans" subtitle="ATÉ R$99,00" />
        </div>

        <div className="section_extra">
          <Section title="CONFIRA TAMBÉM" />
        </div>
      </main>
      
    </Container>
  )
}