import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/products";
import { useProductAttributes } from "../../hooks/productAttributes";
import { api } from "../../services/api";

import bermuda from "../../assets/bermuda.jpg";

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
  const { isAdmin } = useAuth();
  const { findProduct, setLastViewedProductStorage } = useProducts();
  const { allColorsOfProduct } = useProductAttributes();

  const [ isFavorite, setIsFavorite ] = useState(false);
  const [ product, setProduct ] = useState({});
  const [ colors, setColors ] = useState([]);
  const [ colorName, setColorName ] = useState([]);
  const [ slides, setSlides ] = useState([]);
  const [ allSizes, setAllSizes ] = useState([]);
  const [ sizesByColor, setSizesByColor ] = useState([]);
  const [ productDetails, setProductDetails ] = useState([]);
  const [ productModelDetails, setProductModelDetails ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  let urlSearch = (useLocation().search).split("?")[1];
  urlSearch = decodeURIComponent(urlSearch); 
  const product_name = urlSearch.replace(/-/g, ' ');
  const product_id = Number(product_name);
  
  const navigate = useNavigate();

  function navigateEdit() {
    setLastViewedProductStorage({
      ...product,
      colors: colors,
      sizes: allSizes,
      productDetails: productDetails,
      productModelDetails: productModelDetails
    });

    navigate("/edit");
  }  

  function handleFavorite() {
    if(isFavorite) {
      setIsFavorite(false);
      return;
    }

    setIsFavorite(true);
  }

  function handleChangeSize(button) {
    const allButtons = document.querySelectorAll(".outfit-size button");
    const othersButtons = Array.from(allButtons).filter(btn => btn != button);

    button.classList.toggle("changeSize");

    othersButtons.forEach(index => {
      index.classList.remove("changeSize");
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

    setColorName(color.name);
    setAllSizes(allProductSizes);
    setSlides(newSlides);
    setSizesByColor(newSizes);
  }

  useEffect(() => {
    (async() => {
      try {
        const { newProduct, error } = await findProduct(product_name, product_id);

        if(!newProduct) {
          throw new Error(error);
        }
        const colorsList = await allColorsOfProduct(newProduct.id);

        setProduct(newProduct);
        setColors(colorsList);
        setProductDetails(newProduct.details);
        setProductModelDetails(newProduct.model_details);

        handleChangeSlides(newProduct.images, newProduct.sizes, colorsList[0]);

      } catch(error) {
        document.querySelector("main").innerHTML = error;
      }

    })();

  }, [ urlSearch ]);

  useEffect(() => {
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

    setLoading(false);

  }, [ slides ]);

  return (
    <Container>
      <SecondHeader />
      <Nav />
      <BoxCupom />

  	  {
        !loading &&
      <Main>
        <h2> Home / { product.category } / { product.name } / ID: { product.id } </h2>

        <Swiper slidesPerView={ 1 } pagination={{ clickable: true }} >
          <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeart /> : <VscHeartFilled /> } />
          {
            slides &&
            slides.map((image, index) => (
              <SwiperSlide key={ index }> <img src={ `${ api.defaults.baseURL }/files/${ image }` } alt="" /> </SwiperSlide>
            ))
          }
        </Swiper>

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
            <h2> COR: { colorName } </h2>
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
                  <button key={ index } onClick={(e) => handleChangeSize(e.target) }> { item } </button>
                ))
              }
            </div>
          </div>

          {
            isAdmin ?
            <Button className="buttonEdit" title="EDITAR" onClick={ navigateEdit } />
            :
            <Button className="buttonBuy" title="ADICIONAR AO CARRINHO" />
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
            <ShowOutfit title="Bermuda de Marca" image={ bermuda } promotion="99,00" price="99,00" />
            <ShowOutfit title="Bermuda de Marca" image={ bermuda } promotion="99,00" price="99,00" />
            <ShowOutfit title="Bermuda de Marca" image={ bermuda } promotion="99,00" price="99,00" />
            <ShowOutfit title="Bermuda de Marca" image={ bermuda } promotion="99,00" price="99,00" />
            <ShowOutfit title="Bermuda de Marca" image={ bermuda } promotion="99,00" price="99,00" />
          </div>
        </div>

        <Footer />
      </Main>

      }

      {
        isAdmin ?
        <Button className="buttons buttonEdit" title="EDITAR" onClick={ navigateEdit } />
        :
        <div className="buttons">
          <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeart /> : <VscHeartFilled /> } />
          <Button className="buttonBuy" title="ADICIONAR AO CARRINHO" />
        </div>
      }
    </Container>
  )
}