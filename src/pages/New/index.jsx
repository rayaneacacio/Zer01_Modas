import { SecondHeader } from "../../components/SecondHeader";
import { EditCatalog } from "../../components/EditCatalog";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function New() {
  return (
    <Container>
      <SecondHeader />

      <Main>
        <h3>Novo Produto</h3>
        <EditCatalog />
        <Footer />
      </Main>
    </Container>
  )
}