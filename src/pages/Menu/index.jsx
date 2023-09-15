import { IoMdContact } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { LuBox } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container } from "./style";

export function Menu() {
  return (
    <Container>
      <Header />
      <Button icon={ <IoMdContact /> } title="Minha Conta" />
      <Button icon={ <LuBox /> } title="Meus pedidos" />
      <Button icon={ <SlLocationPin /> } title="Meus Endereços" />
      <Button icon={ <MdLogout /> } title="Sair" />
    </Container>
  )
}