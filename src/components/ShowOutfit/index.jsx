import { useState } from "react";

import { VscHeart, VscHeartFilled } from "react-icons/vsc";

import { Button } from "../Button";

import { Container } from "./style";

export function ShowOutfit({ image, title, price, promotion }) {
  const [ isFavorite, setIsFavorite ] = useState(false);

  function handleFavorite() {
    if(isFavorite) {
      setIsFavorite(false);
      return;
    }

    setIsFavorite(true);
  }

  return (
    <Container $promotion={ promotion }>
      <Button icon={ isFavorite ? <VscHeartFilled size={ 25 } /> : <VscHeart size={ 25 } /> } onClick={ handleFavorite } />
      
      <img src={ image } alt="" />

      <div>
        {
          promotion &&
          <h2 id="promotion"> R$ { promotion } </h2>
        }
        <h2 id="price"> R$ { price } </h2>
      </div>
      
      <h2> { title } </h2>
    </Container>
  )
}