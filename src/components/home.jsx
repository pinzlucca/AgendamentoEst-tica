import '../styles/components/home.css'

const home = () => {
  return (
    <div className="home-container">
        <div style={{
            width: '400px',
            height: '600px',
            backgroundPosition: 'center 180px',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
        }}>
        {/* Conteúdo do componente */}
        <h2>TEXTO 2</h2>
        </div>
    </div>

);
}

export default home