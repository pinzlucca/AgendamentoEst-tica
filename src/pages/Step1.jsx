import { useLocation } from "react-router-dom";
import Revisao from "../components/revisao";

const Step1 = () => {
  const location = useLocation();
  const pedido = location.state || {}; // Garante que pedido não seja undefined

  return (
    <div>
      <Revisao pedido={pedido} />
    </div>
  );
};

export default Step1;
