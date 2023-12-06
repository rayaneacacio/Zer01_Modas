import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

import { Container } from "./style";

export function Orders({ ...rest }) {
  const navigate = useNavigate();
  
  function handleNavigateViewOrder() {
    navigate("/viewOrder");
  }

  return (
    <Container {...rest}>
      <h2> Pedidos </h2>

      <div className="table">
        <div>
          <div> ID </div>
          <div> DATA </div>
          <div> PAGAMENTO </div>
          <div> VALOR TOTAL </div>
          <div> STATUS </div>
          <div></div>
        </div>
  
        <div>
          <div> 02 </div>
          <div> 17/11/2023 </div>
          <div> PIX </div>
          <div> R$ 40,00 </div>
          <div> Entregue </div>
          <div>
            <Button title="ABRIR PEDIDO" onClick={ handleNavigateViewOrder } />
          </div>
        </div>

        <div>
          <div> 02 </div>
          <div> 17/11/2023 </div>
          <div> PIX </div>
          <div> R$ 40,00 </div>
          <div> Entregue </div>
          <div>
            <Button title="ABRIR PEDIDO" onClick={ handleNavigateViewOrder } />
          </div>
        </div>

        <div>
          <div> 02 </div>
          <div> 17/11/2023 </div>
          <div> PIX </div>
          <div> R$ 40,00 </div>
          <div> Entregue </div>
          <div>
            <Button title="ABRIR PEDIDO" onClick={ handleNavigateViewOrder } />
          </div>
        </div>
      </div>
    </Container>
  )
}