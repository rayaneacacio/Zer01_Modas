import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./style";

export function Nav() {
  const [ sliderPerView, setSliderPerview ] = useState(3.2);

  const sections = [
    "PROMOÇÕES", 
    "FEMININO", 
    "MASCULINO",
    "INFANTIL",
    "CASA",
    "ESPORTE",
    "ACESSORIOS"
  ]

  function handleResize() {
    if(window.innerWidth >= 1000) {
      setSliderPerview(7);
      return
    }

    setSliderPerview(3.2);

  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  return (
    <Container>
      <Swiper slidesPerView={ sliderPerView }>
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