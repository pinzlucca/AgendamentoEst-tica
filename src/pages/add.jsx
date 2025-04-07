
import Final from "../components/final";

const add = () => {
  const pedido = location.state || {}; // Garante que pedido não seja undefined

  return (
    <div>
      <Final pedido={pedido} />
    </div>
  );
};

export default add;