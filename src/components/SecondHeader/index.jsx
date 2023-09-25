import { useNavigate } from "react-router-dom";

import { LiaAngleLeftSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";

import { Header } from "../Header";
import { Button } from "../Button";

import { Container } from "./style";

export function SecondHeader() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Button icon={ <LiaAngleLeftSolid size={ 20 } /> } onClick={ navigateBack } />     
      <Button icon={ <FiSearch size={ 30 } /> } className="buttonSearch" />
    </Container>
  )
}