import { useEffect } from "react";
import { resizeLayout } from "../../scripts/resize-layout";

import { Container } from "./style";

export function Input({ title, placeholder, ...rest }) {
  useEffect(() => {
    //capturar o valor da altura do layout sempre q a window for redimensionada;
    resizeLayout();

    window.addEventListener("resize", resizeLayout);

    return () => {
      window.removeEventListener("resize", resizeLayout);
    }

  }, []);

  return (
    <Container {...rest}>
      {
        title &&
        <h3> { title } </h3>
      }
      <input type="text" placeholder={ placeholder } />
    </Container>
  )
}