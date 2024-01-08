import { useState, useEffect } from 'react';
import logoAnimated from "../assets/logo-complete-RY.jpg"

const LogoAnimation = ({ onLogoLoaded }) => {
  const [loaded, setLoaded] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: '10vw', height: '7vw' });

  useEffect(() => {
    const updateLogoSize = () => {
      setLogoSize({ width: '90vw', height: '60vw' });
      setLoaded(true);
      // We need to notify the parent component that logo animation is loaded
      onLogoLoaded();
    };

    setTimeout(updateLogoSize, 500)

    // Cleanup function:
    return () => {
      clearTimeout(updateLogoSize);
    };
  }, [onLogoLoaded]);

  const logoStyles = {
    width: logoSize.width,
    height: logoSize.height,
    opacity: loaded ? '1' : '0',
    transition: "all 2s ease-in-out",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <img src={logoAnimated} alt="Logo" className="logo" style={logoStyles} />
    </div>
  );
};

export default LogoAnimation;