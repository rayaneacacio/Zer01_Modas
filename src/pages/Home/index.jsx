import imgModaFeminina from "../../assets/background-promocao-moda-feminina.png";
import imgModaMasculina from "../../assets/background-promocao-moda-masculina.png";
import imgModaInfantil from "../../assets/background-promocao-moda-infantil.png";
import gifModaÍntima from "../../assets/gif-moda-intima-secao-novidades.gif";
import gifCamisetas from "../../assets/gif-camisetas-secao-novidades.gif";
import gifTenis from "../../assets/gif-tenis-secao-novidades.gif";
import gifJeans from "../../assets/gif-jeans-secao-novidades.gif";
import img_acessorios from "../../assets/acessorio-secao-confira-tambem.png";
import img_casa from "../../assets/casa-secao-confira-tambem.png";
import img_esporte from "../../assets/esporte-secao-confira-tambem.png";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { PromotionalCard } from "../../components/Promotion-card";
import { NoveltyCard } from "../../components/Novelty-card";
import { ExtraCard } from "../../components/ExtraCard";
import { InputBox } from "../../components/InputBox";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Aside } from "./style";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Nav />
        <BoxCupom />
        <Banner />

        <div className="section_promotion">
          <Section title="PROMOÇÕES" />
          <PromotionalCard img_png={ imgModaFeminina } promotion="30%" />
          <PromotionalCard img_png={ imgModaMasculina } promotion="50%" />
          <PromotionalCard img_png={ imgModaInfantil } promotion="50%" />
        </div>

        <div className="section_novelty" style={{ display:"none" }}> 
          <Section title="NOVIDADES" />
          <NoveltyCard className="main-card" $main_card />
          <NoveltyCard className="card2" gif={ gifModaÍntima } title="Moda Íntima" subtitle="ATÉ R$19,00" />
          <NoveltyCard className="card3" gif={ gifCamisetas } title="Camisetas" subtitle="ATÉ R$39,00" />
          <NoveltyCard className="card4" gif={ gifTenis } title="Tênis" subtitle="ATÉ R$59,00" />
          <NoveltyCard className="card5" gif={ gifJeans } title="Jeans" subtitle="ATÉ R$99,00" />
        </div>

        <div className="section_extra">
          <Section title="CONFIRA TAMBÉM" />
          <ExtraCard className="card2" image={ img_casa } title="Casa" />
          <ExtraCard className="card3" image={ img_esporte } title="Esporte" />
          <ExtraCard className="card4" image={ img_acessorios } title="Acessorios" />
        </div>

        <Aside>
          <span>
            <p> GANHE R$15 </p>
            <p> NA PRIMEIRA COMPRA! </p>
          </span>

          <p> Válido para compras acima de R$230. </p>
        </Aside>

        <Footer />
      </main>

    </Container>
  )
}