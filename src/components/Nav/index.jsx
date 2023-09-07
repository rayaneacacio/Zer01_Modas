import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./style";

export function Nav() {
  const sections = [
    "PROMOÇÕES", 
    "FEMININO", 
    "MASCULINO",
    "INFANTIL",
    "CASA",
    "ESPORTE",
    "ACESSORIOS"
  ]

  return (
    <Container>
      <Swiper slidesPerView={ 3.2 }>
        {
          sections.map(title => (
            <SwiperSlide key={ title }>
              <button> { title } </button>
            </SwiperSlide>
          ))
        }
      </Swiper>
      
    </Container>
  )
}