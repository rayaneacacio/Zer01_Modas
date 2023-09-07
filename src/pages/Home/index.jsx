import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";

import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <Header />
      <Nav />
      <BoxCupom />
      <Banner />

      <div>
        <Section title="PROMOÇÕES" />
      </div>

      <div>
        <Section title="NOVIDADES" />
      </div>

      <div>
        <Section title="CONFIRA TAMBÉM" />
      </div>
      
    </Container>
  )
}