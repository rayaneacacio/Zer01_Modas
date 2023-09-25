import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import OutfitImg from "../../assets/pedido.jpg";
import OutfitCostasImg from "../../assets/outfit-costas.jpg";
import OutfitZoomImg from "../../assets/outfit-zoom.jpg";

import { VscHeartFilled, VscHeart } from "react-icons/vsc";

import { SecondHeader } from "../../components/SecondHeader";
import { Stars } from "../../components/Stars";
import { Button } from "../../components/Button";
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

  return (
    <Container>
      <SecondHeader />

      <Main>
        <div className="slides">
          <div className="previews">
            {
              slides &&
              slides.map(image => (
                <img src={ image } />
              ))
            }
          </div>

          <Swiper slidesPerView={ 1 } pagination={{ clickable: true }} > 
            {
              slides &&
              slides.map(image => (
                <SwiperSlide key={ image }> <img src={ image } alt="" /> </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div className="about">
          <div>
            <h1> R$ 74,90 </h1>
            <h1> R$ 59,99 </h1>
            <Stars className="stars" score={ 4 } />
          </div>

          <h2> Hang Lose </h2>
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
          <h2> AVALIÇÕES DOS CLIENTES (19) </h2>
        </div>
      </Main>

      <div className="buttons">
        <Button className="buttonHeart" onClick={ handleFavorite } icon={ isFavorite ? <VscHeart /> : <VscHeartFilled /> } />
        <Button className="buttonBuy" title="Adicionar ao carrinho" />
      </div>
    </Container>
  )
}