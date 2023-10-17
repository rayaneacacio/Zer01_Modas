import { Input } from "../Input";
import { ChangeColor } from "../ChangeColor";
import { OutfitTag } from "../OutfitTag";

import { Container } from "./style";

export function EditCatalog({ ...rest }) {
  return (
    <Container {...rest}>
      <Input title="Nome" placeholder="Nome do produto" />

      <label className="label_select" id="categoryLabel" htmlFor="categoria">
        Categoria:
        <select name="categoria" id="">
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="infantil">Infantil</option>
          <option value="casa">Casa</option>
          <option value="esporte">Esporte</option>
          <option value="acessorios">Acessórios</option>
        </select>
      </label>

      <Input id="inputPrice" title="Preço" type="number" placeholder="R$ 00,00" />

      <Input id="inputPromotion" title="Promoçao" type="number" placeholder="00%" />

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