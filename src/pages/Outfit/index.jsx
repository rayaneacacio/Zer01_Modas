import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/products";
import { useProductAttributes } from "../../hooks/productAttributes";
import { useShopping } from "../../hooks/shopping";
import { api } from "../../services/api";
import { createNotification } from "../../scripts/notifications";

import { VscHeartFilled, VscHeart } from "react-icons/vsc";
import { BsChevronDown } from "react-icons/bs";

import { SecondHeader } from "../../components/SecondHeader";
import { Stars } from "../../components/Stars";
import { Button } from "../../components/Button";
import { Comment } from "../../components/Comment";
import { Section } from "../../components/Section";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Nav } from "../../components/Nav";
import { BoxCupom } from "../../components/BoxCupom";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Outfit() {
  const { userData, isAdmin } = useAuth();
  const { findProduct, setLastViewedProductStorage, insertFavorite, findIfIsFavorite, removeFavorite, allProducts, findProductsByCategory } = useProducts();
  const { allColorsOfProduct } = useProductAttributes();
  const { addShoppingCart, productsShoppingCart } = useShopping();

  const [ isFavorite, setIsFavorite ] = useState(false); //favoritar o produto;
  const [ product, setProduct ] = useState({}); //produto;
  const [ colors, setColors ] = useState([]); //cores disponiveis para a compra;
  const [ chosenColor, setChosenColor ] = useState([]); //cor que está sendo visualizada (cor q foi selecionada);
  const [ slides, setSlides ] = useState([]); //imagens do produto;
  const [ allSizes, setAllSizes ] = useState([]); //todos tamanhos disponíveis;
  const [ sizesByColor, setSizesByColor ] = useState([]); //tamanhos referentes a cada cor;
  const [ productDetails, setProductDetails ] = useState([]); //detalhes do produto (tags descricao);
  const [ productModelDetails, setProductModelDetails ] = useState([]); //detalhes do modelo (tags descricao);
  const [ loading, setLoading ] = useState(true); //carregando a pagina;

  let urlSearch = (useLocation().search).split("?")[1];
  urlSearch = decodeURIComponent(urlSearch); 
  const product_name = urlSearch;
  const product_id = Number(product_name);
  
  const navigate = useNavigate();

  function handleNavigateEditProduct() {
    setLastViewedProductStorage({
      ...product,
      colors: colors,
      sizes: allSizes,
      productDetails: productDetails,
      productModelDetails: productModelDetails
    });

    navigate("/edit_product");
  } 

  function openLogin() {
    document.querySelector(".modal-login").show();
    sessionStorage.setItem("@zer01modas:modal", "open");
  }

  async function handleFavorite() {
    if(!userData) {
      if(window.innerWidth >= 1000) {
        openLogin();
      } else {
        navigate("/login");
      }
      
      return;
    }

    if(isFavorite) {
      setIsFavorite(false);
      await removeFavorite(product);
      return;
    }

    setIsFavorite(true);
    await insertFavorite(product);
  }

  function handleChangeSize(button) {
    const allButtons = document.querySelectorAll(".outfit-size button");
    const othersButtons = Array.from(allButtons).filter(btn => btn != button);

    button.classList.toggle("chosenSize");

    othersButtons.forEach(index => {
      index.classList.remove("chosenSize");
    });
  }

  function handleChangeSlides(allImages, allProductSizes, color) {
    const newSlides = [];
    const newSizes = [];

    allImages.map(img =>{
      if(img.color_id == color.id) {
        newSlides.push(img.image);
      }
    });

    allProductSizes.map(size =>{
      if(size.color_id == color.id) {
        newSizes.push(size.size);
      }
    });

    setChosenColor(color);
    setAllSizes(allProductSizes);
    setSlides(newSlides);
    setSizesByColor(newSizes);
  }

  async function handleAddToCart() {
    const chosenSize = document.querySelector(".chosenSize");

    if(!userData) {
      if(window.innerWidth >= 1000) {
        openLogin();
      } else {
        navigate("/login");
      }
      
      return;
    }

    if(!chosenSize) {
      createNotification("por favor escolha o tamanho");
      return;
    }

    await addShoppingCart(product.id, chosenSize.value, chosenColor);
    createNotification("Produto adicionado ao carrinho :)");
  }

  function handleNavigateOutfit(product_name) {
    navigate(`/outfit?${product_name}`);
    window.location.reload();
  }

  function cssPaginationSwiper() {
    //estilizar os paginations do swiper;
    const allBulletsPagination = document.querySelectorAll(".swiper-pagination-bullet");
    if(allBulletsPagination) {
      for(let index = 0; index < allBulletsPagination.length; index++) {
        allBulletsPagination[index].style.flex = 1;
        allBulletsPagination[index].style.background = `url(${ `${ api.defaults.baseURL }/files/${ slides[index] }` }) no-repeat center center`;
        allBulletsPagination[index].style.backgroundSize = "cover";
        allBulletsPagination[index].style.borderRadius = 0;

        if(allBulletsPagination.length > 4) {
          document.querySelector(".swiper-pagination").style.height = "35rem";
        }
      }
    }
  }

  useEffect(() => {
    (async() => {
      try {
        const { newProduct, error } = await findProduct({ name: product_name, id: product_id });

        if(!newProduct) {
          throw new Error(error);
        }

        await findProductsByCategory(newProduct.category);

        const colorsList = await allColorsOfProduct(newProduct.id);

        setProduct(newProduct);
        setColors(colorsList);
        setProductDetails(newProduct.details);
        setProductModelDetails(newProduct.model_details);

        handleChangeSlides(newProduct.images, newProduct.sizes, colorsList[0]);

        cssPaginationSwiper();

        setLoading(false);

      } catch(error) {
      }

    })();

  }, [ urlSearch ]);

  useEffect(() => {
    cssPaginationSwiper();

  }, [ slides ]);

  useEffect(() => {
    if(userData) {
      (async() => {
        const fav = await findIfIsFavorite(product);
    
        if(fav) {
          setIsFavorite(true);
        }
      })();
    }
    
  }, [ product ]);

  return (
    <Container>
      <SecondHeader />
      <Nav />
      <BoxCupom />

      <Main>
        <h2> Home / { product.category } / { product.name } / ID: { product.id } </h2>

        {
          loading ? 
          <div style={{ 
            height: "42rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridArea: "swiper"
            }}>
            <div className="divLoadingSpin" style={{ 
              width: "7rem", 
              height: "7rem", 
              borderRadius: "9999px", 
              border: "10px solid white",
              display: "flex", 
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{ 
                  width: "4rem", 
                  height: "4rem", 
                  background: "white", 
                  borderRadius: "9999px" 
                }}></div>
            </div>
          </div>
          :
          <Swiper slidesPerView={ 1 } pagination={{ clickable: true }} >
            <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeartFilled /> : <VscHeart /> } />
            {
              slides &&
              slides.map((image, index) => (
                <SwiperSlide key={ index }> <img src={ `${ api.defaults.baseURL }/files/${ image }` } alt="" /> </SwiperSlide>
              ))
            }
          </Swiper>
        }

        <div className="about">
          <div>
            {
              product.promotion ? 
              <div className="promotion">
                <h1> { product.promotion.new_price } </h1>
                <h1> { product.price } </h1>
                <div>
                  <p> -{ product.promotion.percentage }% </p>
                </div>
              </div>
              :
              <h1> { product.price } </h1>
            }

            <div className="boxStars">
              <Stars score={ product.score } />
              <p> 0 </p>
            </div>
          </div>

          <h2> { product.name } </h2>

          <div className="outfit-color">
            <h2> COR: { chosenColor && chosenColor.name } </h2>
            <div>
              {
                colors.length > 0 &&
                colors.map((color, index) => (
                  <button style={{background: color.hex}} key={ index } onClick={() => handleChangeSlides(product.images, product.sizes, color) }></button>
                ))
              }
            </div>
          </div>

          <div className="outfit-size">
            <h2> TAMANHO </h2>
            <div>
              {
                sizesByColor.length > 0 &&
                sizesByColor.map((item, index) => (
                  <button key={ index } value={ item } onClick={(e) => handleChangeSize(e.target) }> { item } </button>
                ))
              }
            </div>
          </div>

          {
            isAdmin ?
            <Button className="buttonEdit" title="EDITAR" onClick={ handleNavigateEditProduct } />
            :
            <Button className="buttonBuy" title="ADICIONAR AO CARRINHO" onClick={ handleAddToCart } />
          }
        </div>

        <div className="description">
          <div>
            <p> <strong> DETALHES </strong> </p>
            <p className="routeInfo"> Home / { product.category } / { product.name } / ID: { product.id } </p>
            <p> { product.description } </p>
          </div>

          {
            productDetails.length > 0 &&
            <div>
              {
              productDetails.map((item, index) => (
                <p key={ index }> { item.detail } </p>
              ))
              }
            </div>
          }


          {
            productModelDetails.length > 0 &&
            <div>
              <p> <strong> Medidas do modelo: </strong> </p>
              {
              productModelDetails.map((item, index) => (
                <p key={ index }> { item.model_detail } </p>
              ))
              }
            </div>
          }
        </div>

        <div className="reviews">
          <h1> AVALIÇÕES DOS CLIENTES (19) </h1>
          <div className="boxScore">
            <span> 4.2 </span>
            <Stars score={ 5 } />
          </div>
          <Comment title="melhor custo beneficio" score={ 5 } review="Adorei o produto!! Malha muito boa e veste muito bem!!" user="nane" />
          <Comment title="melhor custo beneficio" score={ 1 } review="Adorei o produto!! Os tamanhos são condizentes com a realidade Malha muito boa e veste muito bem!!" user="nane" />
          <Button title="VER MAIS AVALIAÇÕES" icon={ <BsChevronDown /> } />
        </div>

        <div className="recommended">
          <Section title="RECOMENDADOS" />
          <div>
            {
              allProducts.length > 0 &&
              allProducts.map((product, index) => (
                <ShowOutfit key={ index } title={ product.title } image={ `${ api.defaults.baseURL }/files/${ product.img }` } promotion={ product.promotion } price={ product.price } onClick={() => handleNavigateOutfit(product.name)} />
              ))
            }
          </div>
        </div>

        <Footer />
      </Main>

      {
        isAdmin ?
        <Button className="buttons buttonEdit" title="EDITAR" onClick={ handleNavigateEditProduct } />
        :
        <div className="buttons">
          <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeartFilled /> : <VscHeart /> } />
          <Button className="buttonBuy" title="ADICIONAR AO CARRINHO" onClick={ handleAddToCart } />
        </div>
      }
    </Container>
  )
}