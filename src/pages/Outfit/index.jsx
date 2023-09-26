import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import OutfitImg from "../../assets/pedido.jpg";
import OutfitCostasImg from "../../assets/outfit-costas.jpg";
import OutfitZoomImg from "../../assets/outfit-zoom.jpg";
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
  const [ isFavorite, setIsFavorite ] = useState(false);

  const slides = [
    OutfitImg,
    OutfitCostasImg,
    OutfitZoomImg
  ]

  function handleFavorite() {
    if(isFavorite) {
      setIsFavorite(false);
      return;
    }

    setIsFavorite(true);
  }

  function handleOutfitSize(button) {
    const allButtons = document.querySelectorAll(".outfit-size button");
    allButtons.forEach(index => {
      index.style.border = "1px solid black";
      index.style.fontWeight = "normal";
    });
 
    button.style.border = "2px solid black";
    button.style.fontWeight = "bold";
  }

  useEffect(() => {
    const allBulletsPagination = document.querySelectorAll(".swiper-pagination-bullet");
    if(allBulletsPagination) {
      for(let index = 0; index < allBulletsPagination.length; index++) {
        allBulletsPagination[index].style.flex = 1;
        allBulletsPagination[index].style.background = `url(${ slides[index] }) no-repeat center center`;
        allBulletsPagination[index].style.backgroundSize = "contain";
        allBulletsPagination[index].style.borderRadius = 0;
      }
    }

  }, []);

  return (
    <Container>
      <SecondHeader />
      <Nav />
      <BoxCupom />

      <Main>
        <h2> Home / Masculino / Camisetas </h2>

        <Swiper slidesPerView={ 1 } pagination={{ clickable: true }} >
          <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeart /> : <VscHeartFilled /> } />
          {
            slides &&
            slides.map(image => (
              <SwiperSlide key={ image }> <img src={ image } alt="" /> </SwiperSlide>
            ))
          }
        </Swiper>

        <div className="about">
          <div>
            <h1> R$ 74,90 </h1>
            <h1> R$ 59,99 </h1>
            <div className="boxStars">
              <Stars score={ 4 } />
              <p> (19) </p>
            </div>
          </div>

          <h2> Hang Lose </h2>

          <div className="outfit-color">
            <h2> COR </h2>
            <div>
              <button></button>
            </div>
          </div>

          <div className="outfit-size">
            <h2> TAMANHO </h2>
            <div>
              <button onClick={(e) => handleOutfitSize(e.target) }> P </button>
              <button onClick={(e) => handleOutfitSize(e.target) }> M </button>
              <button onClick={(e) => handleOutfitSize(e.target) }> G </button>
              <button onClick={(e) => handleOutfitSize(e.target) }> GG </button>
            </div>
          </div>

          <Button className="buttonBuy" title="ADICIONAR AO CARRINHO" />
        </div>

        <div className="description">
          <div>
            <p> <strong> DETALHES </strong> </p>
            <p> Camiseta masculina </p>
            <p> Manga curta </p>
            <p> Gola careca redonda </p>
            <p> Lisa </p>
            <p> Tape preta nos ombros </p>
          </div>

          <div>
            <p> <strong> Marca: </strong> Blue Steel </p>
            <p> <strong> Material: </strong> Sustentável </p>
            <p> <strong> Tecido: </strong> Meia Malha </p>
            <p> <strong> Composição: </strong> 100% Algodão </p>
          </div>
          
          <div>
            <p> <strong> Medidas do modelo: </strong> </p>
            <p> <strong> Altura: </strong> 1,87 </p>
            <p> <strong> Tórax: </strong> 97 </p>
            <p> <strong> Cintura: </strong> 79 </p>
            <p> <strong> Quadril: </strong> 92 </p>
            <p> <strong> Modelo veste tamanho: </strong> M </p>
          </div>
        </div>

        <div className="reviews">
          <h1> AVALIÇÕES DOS CLIENTES (19) </h1>
          <div className="boxStars">
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

      <div className="buttons">
        <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeart /> : <VscHeartFilled /> } />
        <Button className="buttonBuy" title="ADICIONAR AO CARRINHO" />
      </div>
    </Container>
  )
}