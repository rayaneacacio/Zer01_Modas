import { useNavigate } from "react-router-dom";

import { useProducts } from "../../hooks/products";
import { api } from "../../services/api";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Catalog() {
  const { allProducts } = useProducts();
  const navigate = useNavigate();

  function handleNavigateOutfit(product_name, product_id) {
    sessionStorage.setItem("@zer01modas:product", JSON.stringify(product_id));
    navigate(`/outfit?${product_name}`);
  }

  return (
    <Container>
      <SecondHeader />
      <Nav />

      <Main>
        <BoxCupom />
          <div className="DivCatalog">
          {
            allProducts.length > 0 &&
            allProducts.map((product, index) => (
              <ShowOutfit key={ index } image={ `${ api.defaults.baseURL }/files/${ product.img }` } title={ product.name } price={ product.price } onClick={() => handleNavigateOutfit(product.name, product.id) } />
            )).reverse()
          }
          </div>
        <Footer />
      </Main>
    </Container>
  )
}