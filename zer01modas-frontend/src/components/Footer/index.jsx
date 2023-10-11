import { IoLogoInstagram } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

import logoSvg from "../../assets/logo.svg";

import { Container } from "./style";

export function Footer() {
  return (
    <Container>

      <div>
        <span>
          <p> Zer01  nas redes sociais </p>
          <IoLogoInstagram />
          <AiFillYoutube />
          <BiLogoFacebook />
          <BsTwitter />
        </span>

        <img src={ logoSvg } alt="logomarca" />

        <span>
          <p> Fale conosco </p>
          <p> (73) 99932-3341 </p>
          <p> (73) 99817-2200 </p>
        </span>

      </div>

      <p>
        Copyright Zer01 Modas S.A. © - Hilda do Prado Guerra, 373 - Redencao  - Teixeira de Freitas/BA CEP: 45994-132 CNPJ: 37.924.162/0001-26 - Todos os direitos reservados
      </p>

    </Container>
  )
}