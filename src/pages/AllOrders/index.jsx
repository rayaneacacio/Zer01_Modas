import { SecondHeader } from "../../components/SecondHeader";
import { Orders } from "../../components/Orders";
import { Footer } from "../../components/Footer";

import { Container } from "./style";

export function AllOrders() {
  return (
    <Container>
      <SecondHeader />

      <main>
        <Orders />
        <Footer />
      </main>
    </Container>
  )
}