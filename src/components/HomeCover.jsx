import { useState } from "react";
import LogoAnimation from "./LogoAnimation"
import { Helmet } from 'react-helmet';

const HomeCover = ({onEnterClick}) => {
   // Let's create state to manage button visibility:
  const [showButton, setShowButton] = useState(false);
  
  const handleLogoLoaded = () => {
    setShowButton(true);
  };


  return (
    <div className="cover-container">
      <Helmet>
        <title>Flettor - Engenharia & Consultoria</title>
        <meta
          name="description"
          content="Flettor é uma consultora de engenharia civil dedicada a oferecer soluções inovadoras e de alta qualidade. Explore nossos serviços e soluções técnicas."
        />
      </Helmet>
      <div className="logo-animation">
        <LogoAnimation onLogoLoaded={handleLogoLoaded} />
      </div>
      {showButton && (
        <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
          <button className="enter-button" onClick={onEnterClick}>
            Entrar
          </button>
        </div>
      )}
    </div>
  )
}

export default HomeCover