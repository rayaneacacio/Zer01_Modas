import { IoMdContact } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { LuBox } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

import { Button } from "../Button";

import { Container } from "./style";

export function NavMenu({ ...rest }) {
  return (
    <Container {...rest}>
      <Button icon={ <IoMdContact /> } title="Minha Conta" />
      <Button icon={ <LuBox /> } title="Meus pedidos" />
      <Button icon={ <SlLocationPin /> } title="Meus Endereços" />
      <Button icon={ <MdLogout /> } title="Sair" />
    </Container>
  )
}