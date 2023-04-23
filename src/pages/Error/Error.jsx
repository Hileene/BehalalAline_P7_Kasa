import ErrorImg from '../../assets/404.png'
import { NavLink } from 'react-router-dom'
import './error.css'

function Error() {
  return (
    <div className="error">
      <img
        src={ErrorImg}
        alt="Cette page est introuvable"
        className="error-pic"
      />
      <span className="error-text">
        Oups! La page que vous demandez n'existe pas
      </span>
      <NavLink className="error-redirect" to="/">
       Retourner sur la page d'accueil
      </NavLink>
    </div>
  )
}

export default Error
