import { Routes, Route, useNavigate } from "react-router-dom";
import PlanosPage from "./pages/PlanosPage";
import Add from "./pages/Add";
import Header from "./components/header";
import Step1 from "./pages/Step1.jsx"; // Página para onde você quer ir
import './styles/App.css'
import { useState } from "react";



export default function App() {
  const navigate = useNavigate(); 
  const [pedido, setPedido] = useState(null);

  const selecionarPlano = (plano) => {
    navigate(`/planos?plano=${plano}`);
  };

  const finalizarAgendamento = (dadosPedido) => {
    setPedido(dadosPedido);
    navigate("/step1");
  };

  return (
  <>
    <Header />
    <div className="">
      <Routes>

        <Route path="/"             
        element={
                <>
                  <h1>Escolha seu Plano:</h1>
                  <div className="btn-container">
                    <button onClick={() => selecionarPlano("standard")}>Standard</button>
                    <button onClick={() => selecionarPlano("gold")}>Gold</button>
                    <button onClick={() => selecionarPlano("diamond")}>Diamond</button>
                  </div>
                </>
              }
            />

        <Route path="/planos" 
        element={
            <>
              <div>
                <h1>Escolha seu Plano:</h1>
                  <div className="btn-container">
                    <button onClick={() => selecionarPlano("standard")}>Standard</button>
                    <button onClick={() => selecionarPlano("gold")}>Gold</button>
                    <button onClick={() => selecionarPlano("diamond")}>Diamond</button>
                  </div>
                <PlanosPage />
              </div>  
            </>} 
          />
          <Route
            path="/planos"
            element={<PlanosPage onAgendar={finalizarAgendamento} />}
          />
          
          <Route path="/step1" element={<Step1 pedido={pedido} />} />

          <Route path="/add" element={<Add pedido={pedido} />} />
        </Routes>
    </div>
  </>
    
  );
}
