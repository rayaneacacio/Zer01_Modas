import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useMenu } from "../../hooks/menu";
import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/products";
import { createConfirmationMessage } from "../../scripts/notifications";

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
  const { openMenuDesktop, closenMenuDesktop } = useMenu();
  const { userData, isAdmin, SignOut } = useAuth();
  const { setFavorites, setCartBuy } = useProducts();

  const navigate = useNavigate();
  const route = useLocation();

  function handleOpenModalLogin() {
    if(window.innerWidth < 1000) {
      navigate("/login");
      return;
    }

    document.querySelector(".modal-login").show();
    openMenuDesktop();
  }

  async function handleSignOut() {
    await SignOut();
    setFavorites([]);
    setCartBuy({ products: [] });
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
    const buttonConfirm = createConfirmationMessage("Desconectar? :(");
    buttonConfirm.addEventListener("click", handleSignOut);

    document.querySelectorAll(".confirmationModal button")[1].addEventListener("click", closenMenuDesktop);

    openMenuDesktop();
  }

  function handleCloseModalDisconnect() {
    document.querySelector(".confirmationModal").remove();
    document.querySelector(".boxButtons .nav-menu").style.display = "none";
    closenMenuDesktop();
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
        window.removeEventListener("resize", handleWindowResize);
    };

  }, []);

  return (
    <Container className="nav-menu" {...rest}>
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