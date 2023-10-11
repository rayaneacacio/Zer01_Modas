import { Header } from "../../components/Header";
import { NavMenu } from "../../components/Nav-Menu";

import { Container } from "./style";

export function Menu() {
  return (
    <Container>
      <Header />
      <NavMenu />
    </Container>
  )
}