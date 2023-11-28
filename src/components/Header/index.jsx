import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useMenu } from "../../hooks/menu";
import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/products";
import { useShopping } from "../../hooks/shopping";
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
  const { openMenuDesktop, closenMenuDesktop } = useMenu();
  const { userData, isAdmin } = useAuth();
  const { searchProducts, findAllFavorites, favorites } = useProducts();
  const { cartBuy, findAllProductsShoppingCart } = useShopping();

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
      openMenuDesktop();
    }

    document.querySelector(".firstButton svg").style.animation = "rotate180 0.3s forwards";
  }

  function handleCloseMenuDESKTOP() {
    if(window.innerWidth >= 1000) {
      closenMenuDesktop();
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
    document.querySelector(".boxButtons .nav-menu").style.display = "none";
    closenMenuDesktop();
  }

  function handleNavigateOutfit(product_name) {
    navigate(`/outfit?${product_name}`);
    handleCloseMenuMOBILE();
  }

  useEffect(() => {
    const boxResponseSearch = document.querySelector(".responseSearch");

    (async() => {
      //pesquisar produtos;
      const id = Number(search);
      const response = await searchProducts({ name: search, id });
      setProducts(response);
    })();
    
    //adicionar imagem de erro caso se n encontrar produtos da pesquisa;
    if(window.innerWidth < 1000) { //mobile;
      if(search == "") {
        boxResponseSearch.style.display = "none";
      } else {
        boxResponseSearch.style.display = "flex";
      }

    } else if(search != "") {
      //desktop;
      const inputSearchDesktop = document.querySelector(".inputSearchDesktop input");

      function fetchDataDesktop(key) {
        if(key == "Enter") {
          navigate("/catalog");
        }
      }

      inputSearchDesktop.addEventListener('focus', () => {
        document.addEventListener("keydown", event => fetchDataDesktop(event.key));

        return () => {
          document.removeEventListener("keydown", event => fetchDataDesktop(event.key));
        }
      });

    }

  }, [ search ]);

  useEffect(() => {
    (async() => {
      if(userData) {
        await findAllFavorites();
        await findAllProductsShoppingCart();
      }
      
    })();

  }, [ userData ]);

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
            <span> { favorites.length } </span>
          </button>
          }
          {
            !isAdmin &&
          <button>
            <RiShoppingBag2Line size={ 25 } onClick={ navigateShopping } />
            <span> { cartBuy.products.length } </span>
          </button>
          }
        </div>

        <InputBox className="input inputSearchDesktop" placeholder="O que vai querer hoje?" icon={ iconSearch } onChange={e => setSearch(e.target.value) } />

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