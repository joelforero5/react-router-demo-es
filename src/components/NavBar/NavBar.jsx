import { NavLink } from 'react-router-dom';
import './NavBar.css';
const customClass = ({isActive})=>"menu__link" +
(isActive ? "menu__link_active" : "")
function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className={customClass}>Inicio</NavLink>
      <NavLink to="/reviews" className={customClass}>Reseñas de emojis</NavLink>
      <NavLink to="/about-me" className={customClass}>Sobre mí</NavLink>
    <NavLink to="/about-us" className={customClass}>Sobre nosotros</NavLink>
    </nav>
  )
}

export default NavBar;