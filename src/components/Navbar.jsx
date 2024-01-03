import { Link } from "react-router-dom";
import flettorLogo from "../assets/logo-f.jpg";
import menuBurger from "../assets/menu-burger.png"
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
                    <img src={flettorLogo} />
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
                        Empresa
                    </Link>
                </li>
                <li>
                    <Link to="/services" onClick={closeMenu}>
                        Serviços
                    </Link>
                </li>
                <li>
                    <Link to="/technical-solutions" onClick={closeMenu}>
                        Soluções Técnicas
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
