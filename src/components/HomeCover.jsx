import { useState } from "react";
import LogoAnimation from "./LogoAnimation"

const HomeCover = ({onEnterClick}) => {
   // Let's create state to manage button visibility:
  const [showButton, setShowButton] = useState(false);
  
  const handleLogoLoaded = () => {
    setShowButton(true);
  };


  return (
    <div className="cover-container">
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