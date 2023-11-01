import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { HiOutlineViewList } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";

import Logo from "../../assets/logo.svg";
import iconSearch from "../../assets/search-icon.svg";

import { InputBox } from "../InputBox";
import { NavMenu } from "../Nav-Menu";
import { Button } from "../Button";
import { Login } from "../Login";

import { Container } from "./style";

export function Header() {
  const { userData, isAdmin } = useAuth();
  const [ menuDesktop, setMenuDesktop ] = useState("close");

  const navigate = useNavigate();
  const route = useLocation();

  function handleOpenMenuMOBILE() {
    document.querySelector(".menuMobile").style.display = "block";
  }

  function handleCloseMenuMOBILE() {
    document.querySelector(".menuMobile").style.display = "none";
  }

  function handleOpenMenuDESKTOP() {
    if(window.innerWidth >= 1000) {
      setMenuDesktop("open");
    }

    document.querySelector(".firstButton svg").style.animation = "rotate180 0.3s forwards";
  }

  function handleCloseMenuDESKTOP() {
    if(window.innerWidth >= 1000) {
      setMenuDesktop("close");
    }

    document.querySelector(".firstButton svg").style.animation = "rotate180 reverse 0.3s forwards";
  }

  function navigateShopping() {
    if(route.pathname != "/shopping-cart") {
      navigate("/shopping-cart");
    }

  }

  function navigateFavorites() {
    navigate("/favorites");
  }

  function handleCloseModalLogin() {
    document.querySelector(".modal-login").close();
    sessionStorage.removeItem("@zer01modas:modal");
    document.querySelector(".boxButtons .nav-menu").style.display = "none";
  }

  useEffect(() => {
    const menu = document.querySelector(".boxButtons .nav-menu");
    const modal = sessionStorage.getItem("@zer01modas:modal");

    if(menu) {
      if(menuDesktop == "open") {
        menu.style.display = "flex";
      } else if(!modal) {
        menu.style.display = "none";

      }
    }

  }, [ menuDesktop ]);

  return (
    <Container $pathname={ route.pathname } $isAdmin={ isAdmin }>

      <div>
        <p> Sua moda é feita aqui ;) </p>
        <ul>
          <li> <a href="#"> Política de privacidade </a> </li>
          <li> <a href="#"> Contato </a> </li>
          <li> <a href="#"> Ajuda </a> </li>
        </ul>
      </div>

      <div>
        <Button icon={ <HiOutlineViewList /> } className="buttonMenu" onClick={ handleOpenMenuMOBILE } />
        <div className="menuMobile">
          <div>
            <InputBox className="input" placeholder="O que vai querer hoje?" icon={ iconSearch } />
          </div>
          <NavMenu />
          <Button onClick={ handleCloseMenuMOBILE } />
        </div>

        <img src={ Logo } alt="Logomarca" />

        <div className="boxButtons">
          <button className="firstButton" onMouseOver={ handleOpenMenuDESKTOP } onMouseOut={ handleCloseMenuDESKTOP } >
            {
              userData ?
              <p> Oie, <strong> { userData && userData.user.name } </strong> </p>
              :
              <p> Oie! </p>
            }
            <FaChevronDown size={ 20 } />
          </button>
          <NavMenu onMouseOver={ handleOpenMenuDESKTOP } onMouseOut={ handleCloseMenuDESKTOP }  />

          {
            !isAdmin &&
          <button className="buttonFavorites">
            <FiHeart size={ 25 } onClick={ navigateFavorites } />
            <span> 0 </span>
          </button>
          }
          {
            !isAdmin &&
          <button>
            <RiShoppingBag2Line size={ 25 } onClick={ navigateShopping } />
            <span> 0 </span>
          </button>
          }
        </div>

        <InputBox className="input" placeholder="O que vai querer hoje?" icon={ iconSearch } />

        <dialog className="modal-login">
        <div>
          <div>
            <Button className="buttonClose" icon={ <TfiClose size={ 20 } /> } onClick={ handleCloseModalLogin } />
            <Login />
          </div>
        </div>
      </dialog>
      </div>

    </Container>
  )
}