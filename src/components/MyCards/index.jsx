import { useAuth } from "../../hooks/auth";
import { BiSolidTrashAlt } from "react-icons/bi";

import { Container } from "./style";
import { Button } from "../Button";

export function MyCards({ ...rest }) {
  const { userData } = useAuth();

  return (
    <Container {...rest}>
      <h2> Meus Cartões </h2>

      <div className="card">
        <h2> MASTERCARD </h2>

        <div>
          <div>
          <span> número </span>
          <span> ************0803 </span>
        </div>

        <div>
          <span> titular </span>
          <span> { userData && userData.user.name } </span>
        </div>

        <Button icon={ <BiSolidTrashAlt size={ 20 } /> } />
        </div>
      </div>

      <div className="card">
        <h2> MASTERCARD </h2>

        <div>
          <div>
          <span> número </span>
          <span> ************0803 </span>
        </div>

        <div>
          <span> titular </span>
          <span> { userData && userData.user.name } </span>
        </div>

        <Button icon={ <BiSolidTrashAlt size={ 20 } /> } />
        </div>
      </div>
      
    </Container>
  )
}