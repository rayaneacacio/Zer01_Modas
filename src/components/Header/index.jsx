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

  function navigateMenu() {
    if(window.innerWidth < 1000) {
      if(route.pathname != "/menu") {
        navigate("/menu");
        return;
      }

      navigate(-1);
    }

  }

  function handleMenuDisplayBlock() {
    if(window.innerWidth < 1000) {
      return
    }

    const menu = document.querySelector(".boxButtons aside");
    menu.style.display = "flex";
    
    document.querySelector(".firstButton svg").style.animation = "rotate180 0.5s forwards";
  }

  function handleMenuDisplayNone() {
    if(window.innerWidth < 1000) {
      return
    }
    
    const menu = document.querySelector(".boxButtons aside");
    menu.style.display = "none";

    document.querySelector(".firstButton svg").style.animation = "rotate180 reverse 0.5s forwards";
  }

  function navigateShopping() {
    if(route.pathname != "/shopping-cart") {
      navigate("/shopping-cart");
    }
    
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
          <button className="firstButton" onClick={ navigateMenu } onMouseOver={ handleMenuDisplayBlock } onMouseOut={ handleMenuDisplayNone } >
            <p> Olá, <strong> nane </strong> </p>
            <FaChevronDown size={ 20 } />
          </button>
          <NavMenu onMouseOver={ handleMenuDisplayBlock } onMouseOut={ handleMenuDisplayNone }  />

          <button>
            <FiHeart size={ 30 } />
            <span> 0 </span>
          </button>

          <button>
            <RiShoppingBag2Line size={ 30 } onClick={ navigateShopping } />
            <span> 0 </span>
          </button>
        </div>

        <Input className="input" placeholder="O que vai querer hoje?" icon={ iconSearch } />

      </div>

    </Container>
  )
}