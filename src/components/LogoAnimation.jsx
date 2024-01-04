import { useState, useEffect } from 'react';
import logoAnimated from "../assets/logo-complete-RY.jpg"

const LogoAnimation = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  // console.log(logoAnimated);

  const logoStyles = {
    width: loaded ? '350px' : '7.5px',
    height: loaded ? '220px' : '5px',
    opacity: loaded ? '1' : '0',
    transition: "all 2s ease-in-out"
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={logoAnimated} alt="Logo" className="logo" style={logoStyles}/>
    </div>
  );
};

export default LogoAnimation;