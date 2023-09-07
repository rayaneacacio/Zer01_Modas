import { Swiper, SwiperSlide } from "swiper/react";

import background from "../../assets/img background banner.png";
import truckSVG from "../../assets/truck.svg";
import ticketSVG from "../../assets/ticket.svg";
import tagSVG from "../../assets/tag.svg";
import promotionsSVG from "../../assets/promotions.svg";
import creditcardSVG from "../../assets/credit-card.svg";

import { Container } from "./style";

export function Banner() {
  const background2 = background;
  const background3 = background;

  const imgs = [
    background,
    background2,
    background3
  ]

  return (
    <Container>
      <Swiper className="carrossel-imgs" slidesPerView={ 1 } pagination={{ clickable: true }} loop={ true } autoplay={ true }>
        {
          imgs &&
          imgs.map( item => (
            <SwiperSlide key={ item }>
              <img src={ item } alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper className="swiper-nav" slidesPerView={ 2.7 }>
        <SwiperSlide>
          <button>
            <img src={ truckSVG } alt="" />
            <h2> FRETE GRÁTIS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ ticketSVG } alt="" />
            <h2> CUPONS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ tagSVG } alt="" />
            <h2> MELHORES MARCAS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ promotionsSVG } alt="" />
            <h2> MELHORES PREÇOS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ creditcardSVG } alt="" />
            <h2> FORMAS DE PAGAMENTO </h2>
          </button>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}