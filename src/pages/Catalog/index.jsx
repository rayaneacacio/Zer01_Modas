import { useNavigate } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Catalog() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Nav />

      <Button icon={ <MdArrowBack /> } title="voltar" onClick={ navigateBack } />

      <Main></Main>

      <Footer />
    </Container>
  )
}