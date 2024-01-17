import { useState, useEffect } from 'react';
import logoAnimated from "../assets/logo-complete-GY-short.png"
import logoAnimated2 from "../assets/flettor-simple-BW.jpg"

const LogoAnimation = ({ onLogoLoaded }) => {
  const [loaded, setLoaded] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: '7vw', height: '7vw' });

  useEffect(() => {
    const updateLogoSize = () => {
      setLogoSize({ width: '80vw', height: '80vw' });
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
    maxWidth: '100%', // Ensure the logo doesn't exceed its container width
    maxHeight: '100vh', // Ensure the logo doesn't exceed the viewport height
    width: logoSize.width,
    height: logoSize.height,
    objectFit: 'contain',
    opacity: loaded ? '1' : '0',
    transition: "all 2s ease-in-out",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }} className='logo-container'>
      <img src={logoAnimated} alt="Logo" className="logo" style={logoStyles} />
    </div>
  );
};

export default LogoAnimation;