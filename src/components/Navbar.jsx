import { Link } from "react-router-dom";
import flettorLogo from "../assets/logo-flettor-GY-03.jpg";
import flettorLogoSimple from "../assets/logo-simple-GY-02.jpg";
import menuBurger from "../assets/menu-burger-02.png"
import { useState } from "react";

const Navbar = () => {
    // Let's create state for the opening of the menu and spinning of the burger:
    const [isOpen, setIsOpen] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Toggle spinning animation
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 500); // Reset the spinning animation after 500ms
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-li-logo">
                <Link to="/">
                    <img src={flettorLogoSimple} />
                </Link>
            </div>
            <div className={`navbar-toggle ${isSpinning ? 'spin-burger' : ''}`} onClick={toggleMenu}><img src={menuBurger}/></div>
            <div
                className={`overlay ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            ></div>
            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li>
                    <Link to="/about" onClick={closeMenu}>
                        SOBRE NÓS
                    </Link>
                </li>
                <li>
                    <Link to="/services" onClick={closeMenu}>
                        SERVIÇOS
                    </Link>
                </li>
                <li>
                    <Link to="/technical-solutions" onClick={closeMenu}>
                        SOLUÇÕES TÉCNICAS
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>
                        CONTACTO
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
