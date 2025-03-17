import { useState } from "react";
import { useLocation } from "react-router-dom";

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

const Add = () => {
  const location = useLocation();
  const pedido = location.state || {}; // Dados do plano e modelo
  const [diaSelecionado, setDiaSelecionado] = useState(""); // Guarda o dia escolhido
  const [horariosOcupados, setHorariosOcupados] = useState({}); // Guarda horários ocupados por dia

  const selecionarHorario = (horario) => {
    if (!diaSelecionado) {
      alert("Selecione um dia antes de escolher um horário!");
      return;
    }

    const duracao = duracoes[pedido.plano] || 2; // Duração do serviço
    const indice = horarios.indexOf(horario);
    const horariosBloquear = horarios.slice(indice, indice + duracao);

    // Atualiza os horários ocupados no dia selecionado
    setHorariosOcupados((prev) => ({
      ...prev,
      [diaSelecionado]: [...(prev[diaSelecionado] || []), ...horariosBloquear]
    }));
  };

  return (
    <div>
      <h1>Escolha o Dia e Horário</h1>

      {/* Seleção do dia */}
      <input
        type="date"
        value={diaSelecionado}
        onChange={(e) => setDiaSelecionado(e.target.value)}
      />

      <div className="tabela-horarios">
        {horarios.map((horario) => (
          <button
            key={horario}
            onClick={() => selecionarHorario(horario)}
            disabled={horariosOcupados[diaSelecionado]?.includes(horario)}
            style={{
              backgroundColor: horariosOcupados[diaSelecionado]?.includes(horario) ? "gray" : "white"
            }}
          >
            {horario}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Add;
