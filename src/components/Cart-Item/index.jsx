import { GoTrash } from "react-icons/go";
import { VscRemove } from "react-icons/vsc";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../../components/Button";

import { Container } from "./style";

export function CartItem({ image, title, color, tamanho, preço }) {
  return (
    <Container className="box" >

      <Swiper slidesPerView={ 1.9 } spaceBetween={ 10 } >
        <SwiperSlide>
          <div className="mobile">
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

      <div className="desktop">
        <img src={ image } alt="" />
        <div>
          <p> { title } </p>
          <p> Cor: { color } </p>
          <p> Tamanho: { tamanho } </p>
          <span> <h3> Quantidade - 1 + </h3> <h3> R$ { preço } </h3> </span>
        </div>
        <Button icon={ <VscRemove /> } />
      </div>
     
    </Container>
  )
}