import { useLocation } from "react-router-dom";
import Final from "../components/final";

const Add = () => { // <- Comece com letra maiúscula
  const location = useLocation();
  const pedido = location.state || {};

  return (
    <div>
      <Final pedido={pedido} />
    </div>
  );
};

export default Add;
