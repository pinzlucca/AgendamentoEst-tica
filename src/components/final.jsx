import '../styles/components/header.css';
import PropTypes from 'prop-types';

const Final = ({ pedido }) => {
  const horarios = [
    "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  const duracoes = {
    standard: 2,
    gold: 4,
    diamond: 6,
  };

  const indiceInicio = horarios.indexOf(pedido?.horario);
  const duracao = duracoes[pedido?.plano?.toLowerCase()] || 2;
  const horarioFinal = horarios[indiceInicio + duracao];

  // Formata a data para dd/mm/aaaa
  const dataFormatada = pedido?.dia
    ? new Date(pedido.dia).toLocaleDateString('pt-BR')
    : '';

  return (
    <div className='revisao'>
      <h1 className=''>Revisão do Pedido #ID9843</h1>
      <p><strong className='title-pedido'>Plano:</strong> {pedido?.plano.toUpperCase()}</p>
      <p><strong className='title-pedido'>Modelo do carro:</strong> {pedido?.modelo.toUpperCase()}</p>
      <p><strong className='title-pedido'>Preço:</strong> {pedido?.preco}</p>

      <h2 className=''>Serviços inclusos:</h2>
      <ul>
        {pedido?.servicos?.map((servico, index) => (
          <li key={index}>{servico}</li>
        ))}
      </ul>

      <h2 className=''>Informações do Agendamento:</h2>
      <p><strong className='title-pedido'>Data do agendamento:</strong> {dataFormatada}</p>
      <p><strong className='title-pedido'>Horário:</strong> {pedido?.horario} - {horarioFinal}</p>
    </div>
  );
};

Final.propTypes = {
  pedido: PropTypes.shape({
    plano: PropTypes.string,
    modelo: PropTypes.string,
    preco: PropTypes.string,
    servicos: PropTypes.arrayOf(PropTypes.string),
    dia: PropTypes.string,
    horario: PropTypes.string,
  }),
};

export default Final;
