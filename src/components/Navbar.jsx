import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/"></Link></li>
            <li><Link to="/about">Empresa</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/technical-solutions">Soluções Técnicas</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar