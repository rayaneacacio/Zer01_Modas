import { useNavigate } from "react-router-dom";

import { LiaAngleLeftSolid } from "react-icons/lia";

import { Header } from "../Header";
import { Button } from "../Button";

import { Container } from "./style";

export function SecondHeader() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <Button icon={ <LiaAngleLeftSolid size={ 20 } /> } onClick={ navigateBack } />
    </Container>
  )
}