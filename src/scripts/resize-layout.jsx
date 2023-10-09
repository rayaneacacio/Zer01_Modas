import { useEffect, useState } from "react";

export function resizeLayout() {
  //para resetar a altura do layout após interacao com inputs web mobile;

  let [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
  const initialHeight = window.innerHeight;

  function handleResize() {
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    //capturar o valor da altura do layout sempre q a window for redimensionada;
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  useEffect(() => {
    if(windowHeight < initialHeight) {
      initialHeight = window.innerHeight;
      //atualizar a altura inicial com a nova altura da window se a window height for menor que a altura inicial(indicando que o teclado está aberto);

    } else if(windowHeight < initialHeight) {
      document.body.style.height = `${initialHeight}px`;
      //redefinir a altura da window para a altura inicial se a window height for maior que a altura inicial(indicando que o teclado foi fechado); 
    }

  }, [ windowHeight ]);
}