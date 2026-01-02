import { Link } from 'react-router-dom';
import '../styles/header.css'; // keep it separate for clarity
import logoText from '../assets/img/logos/Kyfaru Logo-10.png';
import logoSymbol from '../assets/img/logos/Kyfaru Logo Filled-05.png';

const Header = () => {
  return (
    <header className="header">
            
    
            <nav className="navbar">
              <div className='logo'>
              <a href="#" className="logo-link">
              <img className="logo-symbol" src={logoSymbol} alt="Kyfaru Symbol" />
              <img className="logo-text" src={logoText} alt="Kyfaru Text" />
            </a>
          </div>
          <div className='nav-links'>
            <ul>
              <li  className='nav-item'><a href="#">Home</a></li>
              <li  className='nav-item'><a href="#">About</a></li>
              <li className='nav-item' ><a href="#">Solutions<i className="ti ti-chevron-down"></i></a></li>
              <li className='nav-item'><a href="#">Portfolio</a></li>
              <li className="nav-item dropdown"><a href="#">Ecosystem<i className="ti ti-chevron-down"></i></a>
              <div className="dropdown-menu">
    <div className="dropdown-grid">

      {/* Left column */}
      <a href="#" className="dropdown-item">
        <span className="icon"><img src="src/assets/img/robot.png" alt="" /></span>
        <div className="text">
          <strong>Mwamba AI</strong>
          <small>Kyfaru Artificial intelligence</small>
        </div>
      </a>

      <a href="#" className="dropdown-item">
        <span className="icon">🎓</span>
        <div className="text">
          <strong>Stackable Academy</strong>
          <small>Industry-ready Tech skills</small>
        </div>
      </a>

      {/* Right column */}
      <a href="#" className="dropdown-item">
        <span className="icon"><img src="src/assets/img/coder.png" alt="" /></span>
        <div className="text">
          <strong>Kyfaru Labs</strong>
          <small>Research and Development</small>
        </div>
      </a>

    </div>
  </div></li>

              <li className='nav-item'><a href="#">Contact</a></li>
              <li className="nav-item dropdown">
  <a href="#" className="nav-link">
    Resources <i className="ti ti-chevron-down chevron"></i>
  </a>

  <div className=" dropdown-resource">
    

      {/* Blog */}
      <a href="#" className="dropdown-item">
        <span className="icon">
          <i class="ti ti-news"></i>
        </span>
        <div className="text">
          <strong>Blog</strong>
          <small>Insights on AI & tech</small>
        </div>
      </a>

      {/* Newsroom */}
      <a href="#" className="dropdown-item">
        <span className="icon"><i class="ti ti-radio"></i></span>
        <div className="text">
          <strong>Newsroom</strong>
          <small>Company updates & stories</small>
        </div>
      </a>

      {/* Case Studies */}
      <a href="#" className="dropdown-item">
        <span className="icon">
         <i class="ti ti-vocabulary"></i>
        </span>
        <div className="text">
          <strong>Case Studies</strong>
          <small>Real-world solutions</small>
        </div>
      </a>
  </div>
</li>

            </ul>
            </div>
            </nav>
          </header>
  );
};

export default Header;
