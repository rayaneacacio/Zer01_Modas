import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RiHomeLine} from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { TbShoppingCartPlus } from "react-icons/tb";
import { LuBox } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

import { Button } from "../Button";

import { Container } from "./style";

export function NavMenu({ ...rest }) {
  const { userData, isAdmin, SignOut } = useAuth();

  const navigate = useNavigate();
  const route = useLocation();

  function handleOpenModalLogin() {
    if(window.innerWidth < 1000) {
      navigate("/login");
      return;
    }
    
    document.querySelector(".modal-login").show();
    sessionStorage.setItem("@zer01modas:modal", "open");
  }

  async function handleSignOut() {
    await SignOut();
    handleCloseModalDisconnect();
  }

  function handleWindowResize() {
    //para o modal se adaptar ao tamanho da tela;
    const modal = document.querySelector(".modal-login");
    if(modal) {
      modal.style.width = `${window.innerWidth}px`;
      modal.style.height = `${window.innerHeight}px`;
    }
  }

  function navigateBack() {
    navigate(-1);
  }

  function navigateHome() {
    if(route.pathname != "/") {
      navigate("/");
    }
    
  }

  function navigateFavorites() {
    navigate("/favorites");
  }

  function navigateNew() {
    navigate("/new");
  }

  function handleOpenModalDisconnect() {
    const modalDisconnect = document.createElement("dialog");
    const bodyModal = document.createElement("div");
    const childModal = document.createElement("div");

    modalDisconnect.classList.add("modal-disconnect");

    childModal.innerHTML = `
      <h3>Desconectar? :(</h3>
      <button>CONFIRMAR</button>
      <button>CANCELAR</button>
    `;

    bodyModal.appendChild(childModal);
    modalDisconnect.appendChild(bodyModal);
    document.querySelector("body").appendChild(modalDisconnect);

    document.querySelector(".modal-disconnect button:first-of-type").addEventListener("click", handleSignOut);
    document.querySelector(".modal-disconnect button:last-of-type").addEventListener("click", handleCloseModalDisconnect);

    document.querySelector(".modal-disconnect").show();
    sessionStorage.setItem("@zer01modas:modal", "open");
  }

  function handleCloseModalDisconnect() {
    document.querySelector(".modal-disconnect").close();
    sessionStorage.removeItem("@zer01modas:modal");
    document.querySelector(".boxButtons .nav-menu").style.display = "none";
  }

  useEffect(() => {
    handleWindowResize();
    window.onresize = handleWindowResize;

  }, []);

  return (
    <Container className="nav-menu" {...rest}>
      <Button icon={ <MdOutlineArrowBackIos /> } title="Voltar" className="buttonsOnlyMobile" onClick={ navigateBack } />
      <Button icon={ <RiHomeLine /> } title="Início" onClick={ navigateHome } />
      <Button icon={ <IoMdContact /> } title="Minha Conta" />

      { !isAdmin && <Button icon={ <FiHeart /> } title="Favoritos" className="buttonsOnlyMobile" onClick={ navigateFavorites } /> }

      { !isAdmin && <Button icon={ <LuBox /> } title="Meus pedidos" /> }
      { !isAdmin && <Button icon={ <SlLocationPin /> } title="Meus Endereços" /> }
      
      { isAdmin && <Button icon={ <TbShoppingCartPlus /> } title="Novo produto" onClick={ navigateNew } /> }

      <Button icon={ <MdLogout /> } title={ userData ? "Sair" : "Entrar" } onClick={ userData ? handleOpenModalDisconnect : handleOpenModalLogin } />
    </Container>
  )
}