import { useSearchParams } from "react-router-dom";
import Planos from "../components/Planos";

const PlanosPage = () => {
  const [searchParams] = useSearchParams();
  const plano = searchParams.get("plano") || "standard"; // Pega o plano selecionadono

  return (
    <div className="">
      <Planos plano={plano} />
    </div>
  );
};

export default PlanosPage;
