import logo from '../assets/LOGO-ESTETICA.PNG';
import { useNavigate } from "react-router-dom";
import '../styles/components/header.css';

const Header = () => {
  const navigate = useNavigate(); // Chamando useNavigate dentro do componente

  return (
    <header>      
        <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img src={logo} alt="Logo"/>
        </button>

        <ul className="nav" id="nav">
            <li><a id="navlink" className="nav__link" target="_blank" href="vagas.html">Instagram</a></li>
            <li><a id="navlink" href="#QUEMSOMOS" className="nav__link">WhatsApp</a></li>
            {/* <li><a id="navlink" href="#nossos-serviços" className="nav__link">#</a></li>
            <li><a id="navlink" href="#solicite-orçamento" className="nav__link">#</a></li> */}
        </ul>

        <button type="button" id="menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
  );
}

export default Header;
