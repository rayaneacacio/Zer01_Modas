import { SecondHeader } from "../../components/SecondHeader";
import { MyCards } from "../../components/MyCards";
import { Footer } from "../../components/Footer";

import { Container } from "./style";

export function Cards() {
  return (
    <Container>
      <SecondHeader />

      <main>
        <MyCards />
        <Footer />
      </main>
    </Container>
  )
}