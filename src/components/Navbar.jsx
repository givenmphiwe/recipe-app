import React, {useState} from 'react'
import { Link } from 'react-scroll';
import logo from '../images/logo1.png'

function Navbar() {

  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
        <li><Link to="products" smooth={true} duration={2000}>Products</Link></li>
        <li><Link to="about" smooth={true} duration={2000}>Recipes</Link></li>
        <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;