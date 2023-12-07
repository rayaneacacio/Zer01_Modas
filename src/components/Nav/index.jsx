import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./style";

export function Nav() {
  const [ sliderPerView, setSliderPerview ] = useState(3.2);
  const [ mainSlide, setMainSlide ] = useState(-1);
  const [ mainButton, setMainButton ] = useState("");
  const [ isLoading, setIsLoading ] = useState(true);

  const navigate = useNavigate();
  const url = useLocation();

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

  async function navigateCatalog({ button, title, index }) {
    sessionStorage.setItem("@zer01modas:mainslide", index);
    setMainSlide(index);
    setMainButton(button);

    navigate(`/catalog?${ title.toLowerCase() }`);
  }

  useEffect(() => {
    //verificar se ja existe um valor de slide principa(button em destaque) no armazenamento;
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
    //resetar o estilo de todos os buttons;
    if(mainSlide >= -1) {
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

    //destacar o button selecionado;
    if(mainButton) {
      const button = mainButton;
      button.style.fontSize = "1.4rem";
      button.style.fontWeight = "bold";

      if(window.innerWidth >= 1000) {
        button.style.fontSize = "1.6rem";
      }
    }

  }, [ mainSlide, mainButton ]);

  useEffect(() => {
    if(url.pathname != "/catalog") {
      sessionStorage.setItem("@zer01modas:mainslide", -1);
      setMainSlide(-1);
    }

  }, [ url ]);

  return (
    <Container>
      {
        !isLoading &&
        <Swiper slidesPerView={ sliderPerView } initialSlide={ mainSlide }>
          {
            sections.map((title, index) => (
              <SwiperSlide key={ index }>
                <button onClick={(event) => navigateCatalog({ button: event.target, title, index: sections.indexOf(title)})}> { title } </button>
              </SwiperSlide>
            ))
          }
        </Swiper>
      }

    </Container>
  )
}