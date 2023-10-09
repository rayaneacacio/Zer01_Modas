export function resizeLayout() {
  //para resetar a altura do layout após interacao com inputs web mobile;
  const initialHeight = window.innerHeight;

  if(window.innerHeight < initialHeight) {
    initialHeight = window.innerHeight;
    //atualizar a altura inicial com a nova altura da window se a window height for menor que a altura inicial(indicando que o teclado está aberto);

  } else if(window.innerHeight < initialHeight) {
    document.body.style.height = `${initialHeight}px`;
    //redefinir a altura da window para a altura inicial se a window height for maior que a altura inicial(indicando que o teclado foi fechado); 
  }
}