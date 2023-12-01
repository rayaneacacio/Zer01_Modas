import { SecondHeader } from "../../components/SecondHeader";
import { Cupons } from "../../components/Cupons";
import { Footer } from "../../components/Footer";

import { Container } from "./style";

export function EditCupons() {
  return (
    <Container>
      <SecondHeader />

      <main>
        <Cupons />
        <Footer />
      </main>
    </Container>
  )
}