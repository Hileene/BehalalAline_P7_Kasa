import { NavLink } from "react-router-dom"
import Logo from '../../assets/logo.png'
import "./header.css"

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" className="logo-header" />
            <nav>
                <NavLink to="/" className="nav-links">Accueil</NavLink>
                <NavLink to="/about" className="nav-links">A Propos</NavLink>
            </nav>

        </header>
    )
}

export default Header