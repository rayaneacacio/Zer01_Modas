import { BiUpload } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function ChangeColor({ $newColor, color, nameColor, images, ...rest }) {
  return (
    <Container>
      {
        $newColor ?
        <div>
          <input type="color" name="" id="input-color" />

          <input type="text" placeholder="cor" />

          <label htmlFor="input-newImage">
            <BiUpload size={ 25 } />
            { 
              images && images.length > 1 ? 
              `${ images.length } arquivos escolhidos` 
              : images && images.length == 1 ? 
              "1 arquivo escolhido" 
              : 
              "Nenhum arquivo escolhido" 
            }
            <input type="file" name="" id="input-newImage" accept="image/*" multiple />
          </label>

          <div className="size">
            <button> P </button>
            <button> M </button>
            <button> G </button>
            <button> GG </button>
          </div>

          <Button icon={ <AiOutlinePlus /> } />
        </div>

        :

        <div>
          <input type="color" name="" id="input-color" value={ color } readOnly />

          <input type="text" value={ nameColor } readOnly />

          <label htmlFor="input-image">
            <BiUpload size={ 25 } />
            { images.length > 1 ? `${ images.length } arquivos escolhidos` : "1 arquivo escolhido" }
            <input type="file" name="" id="input-image" accept="image/*" multiple />
          </label>

          <div className="size">
            <button> P </button>
            <button> M </button>
            <button> G </button>
            <button> GG </button>
          </div>

          <Button icon={ <AiOutlineClose /> } />
        </div>
      }
    </Container>
  )
}