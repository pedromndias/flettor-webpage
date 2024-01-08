import { Link } from "react-router-dom";

const Footer = () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <Link className="footer-link" to="/terms-and-conditions">Termos & Condições</Link>
        <p>&copy; 2023-{currentYear} Flettor. Todos os direitos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;