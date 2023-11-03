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
          <p> (85) 99999-9999 </p>
          <p> (85) 99999-9999 </p>
        </span>

      </div>

      <p>
        Copyright Zer01 Modas S.A. © - adfufhuwghioqead, 2984 - Centro - Pentecoste/CE CEP: 62640-000 CNPJ: 37.924.162/0001-26 - Todos os direitos reservados
      </p>

    </Container>
  )
}