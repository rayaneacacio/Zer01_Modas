import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdContact } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { LuBox } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

import { Button } from "../Button";
import { Login } from "../Login";

import { Container } from "./style";

export function NavMenu({ ...rest }) {
  const [ user, setUser ] = useState(false);

  const navigate = useNavigate();

  function handleSignature() {
    if(window.innerWidth < 1000) {
      navigate("/login");
      return;
    }
    
    document.querySelector("dialog").show();
    sessionStorage.setItem("@zer01modass:modal", "open");
  }

  function handleCloseModal() {
    document.querySelector("dialog").close();
    sessionStorage.removeItem("@zer01modass:modal");
  }

  function handleSignOut() {
    setUser(false);
  }

  function handleWindowResize() {
    //para o modal se adaptar ao tamanho da tela;
    const modal = document.querySelector("dialog");
    if(modal) {
      modal.style.width = `${window.innerWidth}px`;
      modal.style.height = `${window.innerHeight}px`;
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.onresize = handleWindowResize;

  }, []);

  return (
    <Container className="nav-menu" {...rest}>
      <Button icon={ <IoMdContact /> } title="Minha Conta" />
      <Button icon={ <LuBox /> } title="Meus pedidos" />
      <Button icon={ <SlLocationPin /> } title="Meus Endereços" />
      <Button icon={ <MdLogout /> } title={ user ? "Sair" : "Entrar" } onClick={ user ? handleSignOut : handleSignature } />
      <dialog>
        <div>
          <div>
            <Button className="buttonClose" icon={ <TfiClose size={ 20 } /> } onClick={ handleCloseModal } />
            <Login />
          </div>
        </div>
      </dialog>
    </Container>
  )
}