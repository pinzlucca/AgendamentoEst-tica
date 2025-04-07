import '../styles/components/header.css';
import PropTypes from 'prop-types';

const Final = ({pedido}) => {

  return (
    <div>
        <h1 className=''>Revisão do PedidoX</h1>
      <p ><strong className='title-pedido'>Plano:</strong> {pedido?.plano.toUpperCase()}</p>
      <p ><strong className='title-pedido'>Modelo do carro:</strong> {pedido?.modelo}</p>
      <p ><strong className='title-pedido'>Preço:</strong> {pedido?.preco}</p>

      <h2 className=''>Serviços inclusos:</h2>
      <ul>
        {pedido?.servicos?.map((servico, index) => (
          <li key={index}>{servico}</li>
        ))}
      </ul>
    </div>
  );
}

Final.propTypes = {
  pedido: PropTypes.shape({
    plano: PropTypes.string,  // plano deve ser uma string
    modelo: PropTypes.string, // modelo deve ser uma string
    preco: PropTypes.string,  // preco deve ser uma string
    servicos: PropTypes.arrayOf(PropTypes.string), // servicos deve ser um array de strings
  }),
};

export default Final;
