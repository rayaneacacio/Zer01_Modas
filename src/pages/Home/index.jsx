import imgModaFeminina from "../../assets/moda-feminina-secao-promocional.png";
import imgModaMasculina from "../../assets/moda-masculina-secao-promocional.png";
import imgModaInfantil from "../../assets/moda-infantil-secao-promocional.png";
import gifModaÍntima from "../../assets/gif-moda-intima-secao-novidades.gif";
import gifCamisetas from "../../assets/gif-camisetas-secao-novidades.gif";
import gifTenis from "../../assets/gif-tenis-secao-novidades.gif";
import gifJeans from "../../assets/gif-jeans-secao-novidades.gif";
import imgRelogios from "../../assets/relogios-secao-confira-tambem.jpg";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { PromotionalCard } from "../../components/Promotion-card";
import { NoveltyCard } from "../../components/Novelty-card";
import { ExtraCard } from "../../components/Extra-card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

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
          <ExtraCard image={ imgRelogios } title="Relógios" />
          <ExtraCard image={ imgRelogios } title="Fones de ouvido" />
          <ExtraCard image={ imgRelogios } title="Smartwatch" />
          <ExtraCard image={ imgRelogios } title="Acessorios de celular" />
        </div>

        <aside>
          <span>
            <p> GANHE R$15 </p>
            <p> NA PRIMEIRA COMPRA! </p>
          </span>

          <p> Válido para compras acima de R$230. </p>

          <Input title="Digite seu email aqui" />

          <Button title="HOMEM" />
          <Button title="MULHER" $background_color="WHITE" />
        </aside>

        <Footer />
      </main>

    </Container>
  )
}