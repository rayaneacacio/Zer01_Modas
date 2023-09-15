import { useNavigate, useLocation } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";

import Logo from "../../assets/logo.svg";
import iconSearch from "../../assets/search-icon.svg";

import { Input } from "../Input";
import { NavMenu } from "../Nav-Menu";

import { Container } from "./style";

export function Header() {
  const navigate = useNavigate();
  const route = useLocation();

  function handleMenu() {
    if(window.innerWidth < 1000) {
      if(route.pathname == "/") {
        navigate("/menu");
        return;
      }

      navigate("/");
    }

  }

  function handleMenuDisplayBlock() {
    const menu = document.querySelector(".firstButton aside");
    menu.style.display = "flex";
  }

  function handleMenuDisplayNone() {
    const menu = document.querySelector(".firstButton aside");
    menu.style.display = "none";
  }

  return (
    <Container $pathname={ route.pathname }>

      <div>
        <p> Sua moda é feita aqui ;) </p>
        <ul>
          <li> <a href="#"> Política de privacidade </a> </li>
          <li> <a href="#"> Contato </a> </li>
          <li> <a href="#"> Ajuda </a> </li>
        </ul>
      </div>

      <div>
        <img src={ Logo } alt="Logomarca" />

        <div className="boxButtons">
          <button className="firstButton" onClick={ handleMenu } onMouseOver={ handleMenuDisplayBlock } onMouseOut={ handleMenuDisplayNone } >
            <p> Olá, <strong> nane </strong> </p>
            <FaChevronDown size={ 20 } />
            <NavMenu />
          </button>

          <button>
            <FiHeart size={ 30 } />
            <span> 0 </span>
          </button>

          <button>
            <RiShoppingBag2Line size={ 30 } />
            <span> 0 </span>
          </button>
        </div>

        <Input className="input" title="O que vai querer hoje?" icon={ iconSearch } />

      </div>

    </Container>
  )
}