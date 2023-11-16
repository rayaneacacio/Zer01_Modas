import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/products";
import { api } from "../../services/api";

import { HiOutlineViewList } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";

import Logo from "../../assets/logo.svg";
import iconSearch from "../../assets/search-icon.svg";
import img_produto_nao_encontrado_mobile from "../../assets/produto-nao-encontrado-branco.png";

import { InputBox } from "../InputBox";
import { NavMenu } from "../Nav-Menu";
import { Button } from "../Button";
import { Login } from "../Login";
import { ShowOutfit } from "../ShowOutfit";

import { Container } from "./style";

export function Header() {
  const { userData, isAdmin } = useAuth();
  const { searchProducts } = useProducts();

  const [ menuDesktop, setMenuDesktop ] = useState("close");
  const [ search, setSearch ] = useState("");
  const [ products, setProducts ] = useState([]);

  const navigate = useNavigate();
  const route = useLocation();

  function handleOpenMenuMOBILE() {
    document.querySelector(".menuMobile").style.display = "block";
  }

  function handleCloseMenuMOBILE() {
    document.querySelector(".menuMobile").style.display = "none";
    document.querySelector(".responseSearch").style.display = "none";
    document.querySelector(".inputSearch input").value ="";
    setProducts([]);
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

  function handleNavigateOutfit(product_name) {
    navigate(`/outfit?${product_name}`);
    handleCloseMenuMOBILE();
  }

  async function fetchDataDesktop(key) {
    if(key == "Enter") {
      const id = Number(search);
      await searchProducts(search, id);
      navigate("/catalog");

    }
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

  useEffect(() => {
    const boxResponseSearch = document.querySelector(".responseSearch");

    (async() => {
      const id = Number(search);
      const response = await searchProducts(search, id);
      setProducts(response);
    })();
    
    if(window.innerWidth < 1000) {
      if(search == "") {
        boxResponseSearch.style.display = "none";
      } else {
        boxResponseSearch.style.display = "flex";
      }

    } else {
      const fetchDataDesktopWithEventKey = async(event) => await fetchDataDesktop(event.key);
      document.addEventListener("keydown", fetchDataDesktopWithEventKey);

      return () => {
        document.removeEventListener("keydown", fetchDataDesktopWithEventKey);
      }

    }

  }, [ search ]);

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
            <InputBox className="input inputSearch" placeholder="O que vai querer hoje?" icon={ iconSearch } onChange={e => setSearch(e.target.value) } />
            <div className="responseSearch">
              {
                products.length > 0 ?
                <div className="div_products">
                  {
                    products.map((product, index) => (
                      <ShowOutfit key={ index } image={ `${ api.defaults.baseURL }/files/${ product.img }` } title={ product.name } price={ product.price } onClick={() => handleNavigateOutfit(product.name) } />
                    ))
                  }
                </div>
                :
                <div>
                  <img src={ img_produto_nao_encontrado_mobile } alt="" />
                </div>
              }
              
            </div>
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

        <InputBox className="input inputSearch" placeholder="O que vai querer hoje?" icon={ iconSearch } onChange={e => setSearch(e.target.value) } />

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