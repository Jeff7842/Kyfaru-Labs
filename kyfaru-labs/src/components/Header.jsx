import { Link } from 'react-router-dom';
import '../styles/header.css'; // keep it separate for clarity
import '../styles/home.css';
import logoText from '../assets/img/logos/Kyfaru Logo-10.png';
import logoSymbol from '../assets/img/logos/Kyfaru Logo Filled-05.png';

const Header = () => {
  return (
    <header className="header">
            <a href="#" className="logo">
              <img className="logo-symbol" src={logoSymbol} alt="Kyfaru Symbol" />
              <img className="logo-text" src={logoText} alt="Kyfaru Text" />
            </a>
    
            <nav className="navbar">
              <a href="#" className="active">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </header>
  );
};

export default Header;
