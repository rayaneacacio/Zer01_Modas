import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { RiHomeLine} from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { TbShoppingCartPlus } from "react-icons/tb";
import { LuBox } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

import { Button } from "../Button";
import { Login } from "../Login";

import { Container } from "./style";

export function NavMenu({ ...rest }) {
  const { userData, isAdmin, SignOut } = useAuth();

  const navigate = useNavigate();
  const route = useLocation();

  function handleSignature() {
    if(window.innerWidth < 1000) {
      navigate("/login");
      return;
    }
    
    document.querySelector(".modal-login").show();
    sessionStorage.setItem("@zer01modas:modal", "open");
  }

  function handleCloseModal() {
    document.querySelector(".modal-login").close();
    sessionStorage.removeItem("@zer01modas:modal");
  }

  async function handleSignOut() {
    if(confirm("Desconectar? :(")) {
      await SignOut();
    }
    
  }

  function handleWindowResize() {
    //para o modal se adaptar ao tamanho da tela;
    const modal = document.querySelector(".modal-login");
    if(modal) {
      modal.style.width = `${window.innerWidth}px`;
      modal.style.height = `${window.innerHeight}px`;
    }
  }

  function navigateHome() {
    if(route.pathname != "/") {
      navigate("/");
    }
    
  }

  function navigateNew() {
    navigate("/new");
  }

  useEffect(() => {
    handleWindowResize();
    window.onresize = handleWindowResize;

  }, []);

  return (
    <Container className="nav-menu" {...rest}>
      <Button icon={ <RiHomeLine /> } title="Início" onClick={ navigateHome } />
      <Button icon={ <IoMdContact /> } title="Minha Conta" />

      { !isAdmin && <Button icon={ <LuBox /> } title="Meus pedidos" /> }
      { !isAdmin && <Button icon={ <SlLocationPin /> } title="Meus Endereços" /> }
      
      { isAdmin && <Button icon={ <TbShoppingCartPlus /> } title="Novo produto" onClick={ navigateNew } /> }

      <Button icon={ <MdLogout /> } title={ userData ? "Sair" : "Entrar" } onClick={ userData ? handleSignOut : handleSignature } />
      <dialog className="modal-login">
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