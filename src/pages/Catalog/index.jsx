import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Catalog() {
  return (
    <Container>
      <Header />
      <Nav />

      <Main></Main>

      <Footer />
    </Container>
  )
}