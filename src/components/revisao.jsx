import PropTypes from 'prop-types';
import "../styles/components/revisao.css";
import Horario from "./horario";

// import Select from 'react-select';

const Revisao = ({ pedido }) => {

  // const servicesOptions = [
  //   { value: 'limparvidro', label: 'Limpar Vidro' },
  //   { value: 'LimpaX', label: 'LimpaX' },
  //   { value: 'LimpaY', label: 'LimpaY' },
  //   { value: 'LimpaZ', label: 'LimpaZ' },
  //   { value: 'LimpaW', label: 'LimpaW' }
  // ];
  
  
  return (
    <div className='revisao'>
      <h1 className=''>Revisão do Pedido</h1>
      <p ><strong className='title-pedido'>Plano:</strong> {pedido?.plano.toUpperCase()}</p>
      <p ><strong className='title-pedido'>Modelo do carro:</strong> {pedido?.modelo.toUpperCase()}</p>
      <p ><strong className='title-pedido'>Preço:</strong> {pedido?.preco}</p>

      <h2 className=''>Serviços inclusos:</h2>
      <ul>
        {pedido?.servicos?.map((servico, index) => (
          <li key={index}>{servico}</li>
        ))}
      </ul>
      <Horario/>
    </div>
  );
};

// Validação das props
Revisao.propTypes = {
  pedido: PropTypes.shape({
    plano: PropTypes.string,  // plano deve ser uma string
    modelo: PropTypes.string, // modelo deve ser uma string
    preco: PropTypes.string,  // preco deve ser uma string
    servicos: PropTypes.arrayOf(PropTypes.string), // servicos deve ser um array de strings
  }),
};

export default Revisao;
