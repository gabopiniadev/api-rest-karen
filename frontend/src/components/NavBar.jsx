import { Link } from "react-router-dom";
import '../assets/css/navbar.scss';
import Logo from '../assets/img/logo.png';


const Navbar = () => {
  return (
    <div className="Header-module__headerwrapper--2Yq6L">
      <header className="Header-module__header--3xzeo">
          <Link className="Header-module__homelink--1N9Da" to="/">
            <img src={Logo} alt="" />
          </Link>
        <nav className="Header-module__nav--25Sms">
          <Link className="Header-module__link--zKtyy" to="/">
            <h6>Inicio</h6>
          </Link>
          <Link className="Header-module__link--zKtyy" to="/search">
            <h6>Buscar tu Pokemon</h6>
           </Link> 
          <Link className="Header-module__link--zKtyy" to="https://pokeapi.co/">
            <h6>Sobre</h6>
          </Link>
        </nav>
    </header>
  </div>  
  );
};
export default Navbar;