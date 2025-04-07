import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/components/horario.css";

const horarios = [
  "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
];

const duracoes = {
  standard: 2, // Bloqueia 1h (07:30 e 08:00)
  gold: 4, // Bloqueia 2h (07:30, 08:00, 08:30, 09:00)
  diamond: 6 // Bloqueia 3h (07:30, 08:00, 08:30, 09:00, 09:30, 10:00)
};

const Agendamento = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pedido = location.state || {}; // Dados do plano e modelo

  
  const [diaSelecionado, setDiaSelecionado] = useState(""); // Guarda o dia escolhido
  const [horariosOcupados, setHorariosOcupados] = useState({}); // Guarda horários ocupados por dia

  const selecionarHorario = (horario) => {
    if (!diaSelecionado) {
      alert("Selecione um dia antes de escolher um horário!");
      return;
    } 
    
    console.log(diaSelecionado);
    // else {
    //   var x = diaSelecionado;
    // }

    const duracao = duracoes[pedido.plano] || 2; // Duração do serviço
    const indice = horarios.indexOf(horario);
    const horariosBloquear = horarios.slice(indice, indice + duracao);
    // if(setHorariosOcupados){
    //   setDiaSelecionado = x;
    // }
    setHorariosOcupados((prev) => {
      const horariosDia = prev[diaSelecionado] || [];

      // Se o horário já estiver ocupado, remove ele e os bloqueios
      if (horariosDia.includes(horario)) {
        return {
          ...prev,
          [diaSelecionado]: horariosDia.filter((h) => !horariosBloquear.includes(h))
        };
      }

      // Se não estiver ocupado, adiciona ele e os bloqueios
      return {
        ...prev,
        [diaSelecionado]: [...horariosDia, ...horariosBloquear]
      };
    });
  };


  const confirmarAgendamento = () => {
    if (!diaSelecionado || !horariosOcupados[diaSelecionado]?.length) {
      alert("Selecione um dia e um horário antes de continuar!");
      return;
    }

    // Pega o primeiro horário selecionado como referência para reserva
    const horarioReservado = horariosOcupados[diaSelecionado][0];

    navigate("/add", {
      state: {
        ...pedido,
        dia: diaSelecionado,
        horario: horarioReservado
      }
    });
  };

  const hoje = new Date().toISOString().split("T")[0];
  return (
    <>
    <div className="horario-container">
      <h1>Escolha o Dia e Horário</h1>

      {/* Seleção do dia */}
      <input
      className="dia"
        type="date"
        min={hoje}
        value={diaSelecionado}
        onChange={(e) => setDiaSelecionado(e.target.value)}
        disabled={horariosOcupados[diaSelecionado]?.length > 0} 
      />

      <div className="tabela-horarios">
        {horarios.map((horario) => (
          <button
            className="horario"
            key={horario}
            onClick={() => selecionarHorario(horario)}
            disabled={horariosOcupados[diaSelecionado]?.includes(horario) && horariosOcupados[diaSelecionado][0] !== horario}
            style={{
              backgroundColor: horariosOcupados[diaSelecionado]?.includes(horario) ? "#13a300" : "white",
              borderStyle: horariosOcupados[diaSelecionado]?.includes(horario) ? "none" : "double"
            }}
          >
            {horario}
          </button>
        ))}
      </div>
    </div>
      <button className="agendamento-btn" onClick={confirmarAgendamento} style={{ marginTop: "20px" }}>
        Confirmar Agendamento
      </button>
    </>
    
  );
};

export default Agendamento;
