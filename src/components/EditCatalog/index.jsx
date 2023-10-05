import { Input } from "../Input";
import { ChangeColor } from "../ChangeColor";
import { OutfitTag } from "../OutfitTag";

import { Container } from "./style";

export function EditCatalog({ ...rest }) {
  return (
    <Container {...rest}>
      <Input title="Nome" placeholder="Nome do produto" />

      <Input title="Preço" placeholder="R$ 00,00" />

      <label id="sizeLabel" htmlFor="size">
        Tamanho: 
        <select name="size" id="size">
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
      </label>

      <div className="colors">
        <p>Cores</p>
        <div className="tags">
          <ChangeColor color="#FF0066" nameColor="Rosa" images={["vestido-rosa.png", "dafsgeg.png"]} />
          <ChangeColor $newColor />
        </div>
      </div>

      <div className="details">
        <p>Detalhes</p>
        <div className="tags">
          <OutfitTag text="Camiseta Masculina" />
          <OutfitTag $newTag />
        </div>
      </div>
      
      <div className="modelDetails">
        <p>Medidas do(a) modelo</p>
        <div className="tags">
          <OutfitTag $newTag />
        </div>
      </div>

      <label className="textarea" htmlFor="textarea">
        Descrição
        <textarea name="" id="textarea" cols="30" rows="10" placeholder="Breve descrição sobre o produto"></textarea>
      </label>

    </Container>
  )
}