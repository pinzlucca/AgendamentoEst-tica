import { useState } from "react";
import seta from '../assets/seta.png';
import { useNavigate } from "react-router-dom";
import "../styles/components/planos.css";
import certo from "../assets/certo.PNG";
import PropTypes from 'prop-types';

const dadosPlanos = {
  standard: {
    nome: "Standard",
    descricao: "TEXTO STANDART hitecto dolorem minima...",
    servicos: ["Detalhamento/Limpeza", "Limpeza de roda", "Aspiração", "Painéis", "Laterais de porta", "Canto de porta", "Bancos", "Tapetes"],
    precos: {
      Hatch: "R$799,00",
      Sedan: "R$799,00",
      "SUV CrossOver": "R$799,00",
      Caminhonete: "R$799,00",
    },
  },
  gold: {
    nome: "Gold",
    descricao: "TEXTO GOLD hitecto dolorem minima...",
    servicos: ["Todos os serviços Standard", "Cera", "Revitalização de plásticos", "Reidratação de couro"],
    precos: {
      Hatch: "R$2.799,00",
      Sedan: "R$2.799,00",
      "SUV CrossOver": "R$2.799,00",
      Caminhonete: "R$1.199,00",
    },
  },
  diamond: {
    nome: "Diamond",
    descricao: "TEXTO DIAMOND hitecto dolorem minima...",
    servicos: ["Todos os serviços Standard e Gold", "Cristalização de parabrisa", "Higienização de ar-condicionado", "Revitalização completa de plásticos"],
    precos: {
      Hatch: "R$7.799,00",
      Sedan: "R$7.799,00",
      "SUV CrossOver": "R$7.799,00",
      Caminhonete: "R$8.799,00",
    },
  },
};

const Planos = ({plano}) => {
  const [modeloSelecionado, setModeloSelecionado] = useState(null);
  const navigate = useNavigate();
  const planoSelecionado = dadosPlanos[plano] || dadosPlanos.standard;

  Planos.propTypes = {
    plano: PropTypes.string.isRequired, // ou PropTypes.string se não for obrigatório
  };
  
  Planos.defaultProps = {
    plano: "standard", // Define um plano padrão se nenhum for passado
  };

  const selecionarModelo = (modelo) => {
    setModeloSelecionado(modelo);
  };

  console.log(plano);

  const agendar = () => {
    if (!modeloSelecionado) {
      alert("Por favor, selecione um modelo antes de agendar.");
      return;
    }
    navigate("/step1", { state: { plano, modeloSelecionado, servicos: planoSelecionado.servicos, preco: planoSelecionado.precos[modeloSelecionado] } });
  };

  return (
    <div className="info-container">
      <button className="back" onClick={() => navigate(-1)}> Voltar <img src={seta} alt="" width="15px"/> </button>
      <h1>PLANO {planoSelecionado.nome.toUpperCase()}</h1>
      <p>{planoSelecionado.descricao}</p>

      <h2>Serviços inclusos:</h2>
      <div className="inclusos-container">
        {planoSelecionado.servicos.map((servico, index) => (
          <div key={index} className="servicos-list">
            <span>{servico}</span>
            <img src={certo} alt="Check" width="20px" />
          </div>
        ))}
      </div>

      <h4>Selecione o modelo do seu carro:</h4>
      <div className="precos-container">
        {Object.entries(planoSelecionado.precos).map(([modelo, preco]) => (
          <div
            key={modelo}
            className={`precos ${modeloSelecionado === modelo ? "selecionado" : ""}`}
            onClick={() => selecionarModelo(modelo)}
          >
            <span>{modelo}</span> <br />
            <span>{preco}</span>
          </div>
        ))}
      </div>

      <button onClick={agendar} className={`agendar ${plano}`}>
        AGENDAR
      </button>
    </div>
  );
};

export default Planos;
