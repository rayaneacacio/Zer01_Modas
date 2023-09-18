import { GoTrash } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../../components/Button";

import { Container } from "./style";

export function CartItem({ image, title, color, tamanho, preço }) {
  return (
    <Container className="box" >
      <Swiper slidesPerView={ 1.9 } spaceBetween={ 10 } >
        <SwiperSlide>
          <main>
            <img src={ image } alt="" />
            <div>
              <p> { title } </p>
              <p> Cor: { color } </p>
              <p> Tamanho: { tamanho } </p>
              <h3> Quantidade - 1 + </h3>
            </div>
          </main>
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <h3> R$ { preço } </h3>
        </SwiperSlide>

        <SwiperSlide className="swiper-button">
          <Button icon={ <GoTrash /> } />
        </SwiperSlide>
      </Swiper>
     
    </Container>
  )
}