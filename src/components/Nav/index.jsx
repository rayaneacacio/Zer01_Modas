import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./style";

export function Nav() {
  const [ sliderPerView, setSliderPerview ] = useState(3.2);
  const [ mainSlide, setMainSlide ] = useState(0);
  const [ mainButton, setMainButton ] = useState("");
  const [ isLoading, setIsLoading ] = useState(true);

  const navigate = useNavigate();
  const paramsUrl = useLocation().pathname;

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
      return;
    }

    setSliderPerview(3.2);

  }

  function navigateCatalog({ button, title, index }) {
    sessionStorage.setItem("@zer01modas:mainslide", index);
    setMainSlide(index);
    setMainButton(button);

    navigate(`/catalog?section=${ title.toLowerCase() }`);
  }

  useEffect(() => {
    const mainSlideValueLocalStorage = sessionStorage.getItem("@zer01modas:mainslide");
    if(mainSlideValueLocalStorage) {
      setMainSlide(mainSlideValueLocalStorage);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    setIsLoading(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  useEffect(() => {
    if(mainSlide >= 0) {
      const allButtons = document.querySelectorAll(".swiper-wrapper button");
      allButtons.forEach(button => {
        button.style.fontSize = "1.3rem";
        button.style.fontWeight = "normal";

        if(window.innerWidth >= 1000) {
          button.style.fontSize = "1.5rem";
        }
      });

      setMainButton(allButtons[mainSlide]);
    }

    if(mainButton) {
      const button = mainButton;
      button.style.fontSize = "1.4rem";
      button.style.fontWeight = "bold";

      if(window.innerWidth >= 1000) {
        button.style.fontSize = "1.6rem";
      }
    }
    
  }, [ mainButton ]);

  useEffect(() => {
    if(paramsUrl != "/catalog") {
      sessionStorage.setItem("@zer01modas:mainslide", -1);
    }

  }, [ paramsUrl ]);

  return (
    <Container>
      {
        !isLoading &&
        <Swiper slidesPerView={ sliderPerView } initialSlide={ mainSlide }>
          {
            sections.map(title => (
              <SwiperSlide key={ title }>
                <button onClick={(event) => navigateCatalog({ button: event.target, title, index: sections.indexOf(title)})}> { title } </button>
              </SwiperSlide>
            ))
          }
        </Swiper>
      }

    </Container>
  )
}