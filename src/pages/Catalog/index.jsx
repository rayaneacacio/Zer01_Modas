import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { useProducts } from "../../hooks/products";
import { api } from "../../services/api";

import img_produto_nao_encontrado from "../../assets/produto-nao-encontrado.png";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";
import { useEffect } from "react";

export function Catalog() {
  const { allProducts, findProductsByCategory, findPromotions, loadingProducts, setLoadingProducts } = useProducts();

  const navigate = useNavigate();
  const url = useLocation();

  function handleNavigateOutfit(product_name) {
    // const path_product_name = product_name.replace(/ /g, "-");
    navigate(`/outfit?${product_name}`);
  }

  useEffect(() => {
    if(url.search != "") {
      setLoadingProducts(true);

      (async() => {
        const section = url.search.replace("?", "");

        if(section == "promo%C3%A7%C3%B5es") {
          await findPromotions();
        } else {
          await findProductsByCategory(section.toUpperCase());
        }

        setLoadingProducts(false);
      })();
    }

  }, [ url ]);

  return (
    <Container>
      <SecondHeader />
      <Nav />

      <Main>
        <BoxCupom />

        {
          loadingProducts &&
          <div style={{ 
            cursor: "progress", 
            display: (window.innerWidth >= 1000 ? "flex" : "grid"),
            gridTemplateColumns: "1fr 1fr",
            gap: (window.innerWidth >= 1000 ? "3rem" : "2rem"),
            columnGap: (window.innerWidth >= 1000 ? "3rem" : "0"),
            flexWrap: "wrap",
            padding: (window.innerWidth >= 1000 ? "2rem" : "1rem"),
            width: (window.innerWidth >= 1000 && "103rem") }}>
            {
              Array.from({ length: 20 }, (_, index) => (
                <div key={ index } className="divLoading" style={{ width: (window.innerWidth >= 1000 ? "17rem" : "15rem" ), height: (window.innerWidth >= 1000 ? "18rem" : "16rem" ) }}></div>
              ))
            }
          </div>
        }

        {
          !loadingProducts && allProducts.length == 0 ?
          <div className="div_img">
            <img src={ img_produto_nao_encontrado } alt="" />
          </div>
        :
          <div className="DivCatalog">
            {
              !loadingProducts && allProducts.length > 0 &&
              allProducts.map((product, index) => (
                <ShowOutfit key={ index } image={ `${ api.defaults.baseURL }/files/${ product.img }` } title={ product.name } price={ product.price } onClick={() => handleNavigateOutfit(product.name) } />
              )).reverse()
            }
          </div>
        }
        
        <Footer />
      </Main>
    </Container>
  )
}