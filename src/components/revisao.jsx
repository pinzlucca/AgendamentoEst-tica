import PropTypes from 'prop-types';
import "../styles/components/revisao.css";
import { useNavigate } from "react-router-dom";

// import Select from 'react-select';

const Revisao = ({ pedido }) => {
  const navigate = useNavigate();
  const add = () => {
    navigate("/add");
  };

  // const servicesOptions = [
  //   { value: 'limparvidro', label: 'Limpar Vidro' },
  //   { value: 'LimpaX', label: 'LimpaX' },
  //   { value: 'LimpaY', label: 'LimpaY' },
  //   { value: 'LimpaZ', label: 'LimpaZ' },
  //   { value: 'LimpaW', label: 'LimpaW' }
  // ];
  

  return (
    <div className='revisao'>
      <h1>Revisão do Pedido</h1>
      <p><strong>Plano:</strong> {pedido?.plano}</p>
      <p><strong>Modelo do carro:</strong> {pedido?.modelo}</p>
      <p><strong>Preço:</strong> {pedido?.preco}</p>

      <h2>Serviços inclusos:</h2>
      <ul>
        {pedido?.servicos?.map((servico, index) => (
          <li key={index}>{servico}</li>
        ))}
      </ul>
      <span>Escolha um horário:</span>
      {/* <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={servicesOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      /> */}

      <button onClick={add}>Finalizar Agendamento</button>
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
