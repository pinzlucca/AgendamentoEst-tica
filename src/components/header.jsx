import logo from '../assets/LOGO-ESTETICA.PNG';


import '../styles/components/header.css'

const header = () => {

  return (
    <header>      
        <img src={logo} alt="Logo"/>
        <ul className="nav" id="nav">
            <li>
                <a id="navlink" className="nav__link" target="_blank" href="vagas.html">VAGAS</a>
            </li>
            <li>
                <a id="navlink" href="#QUEMSOMOS" className="nav__link">QUEM SOMOS</a>
            </li>
            <li>
                <a id="navlink" href="#nossos-serviços" className="nav__link">NOSSOS SERVIÇOS</a>
            </li>
            <li>
                <a id="navlink" href="#solicite-orçamento" className="nav__link">SOLICITE UM ORÇAMENTO</a>
            </li>
        </ul>

        <button type="button" id="menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
        
  )
  
}

export default header