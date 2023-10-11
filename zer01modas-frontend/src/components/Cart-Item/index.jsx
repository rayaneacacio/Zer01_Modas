import { useState } from "react";

import { GoTrash } from "react-icons/go";
import { VscRemove } from "react-icons/vsc";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../../components/Button";

import { Container } from "./style";

export function CartItem({ image, title, color, tamanho, preço }) {
  const [ isSelected, setIsSelected ] = useState(false);

  function handleSelect() {
    if(isSelected === true) {
      setIsSelected(false);
      return;
    }
    
    setIsSelected(true);
  }

  return (
    <Container className="box" >
      <Swiper slidesPerView={ 1.9 } spaceBetween={ 10 } >
        <SwiperSlide>
          <div className="mobile" onClick={ handleSelect }>
            <Button className="select" icon={ isSelected ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } onClick={ handleSelect } />
            <img src={ image } alt="" />
            <div>
              <p> { title } </p>
              <p> Cor: { color } </p>
              <p> Tamanho: { tamanho } </p>
              <h3> Quantidade - 1 + </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <h3> R$ { preço } </h3>
        </SwiperSlide>

        <SwiperSlide className="swiper-button">
          <Button icon={ <GoTrash /> } />
        </SwiperSlide>
      </Swiper>

      <div className="desktop" onClick={ handleSelect }>
        <Button className="select" icon={ isSelected ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } onClick={ handleSelect } />
        <img src={ image } alt="" />
        <div>
          <p> { title } </p>
          <p> Cor: { color } </p>
          <p> Tamanho: { tamanho } </p>
          <span> <h3> Quantidade - 1 + </h3> <h3> R$ { preço } </h3> </span>
        </div>
        <Button className="remove" icon={ <VscRemove /> } />
      </div>
     
    </Container>
  )
}