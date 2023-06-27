import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>IT's a Great Time For A Good Taste of Food</h3>
            <h1><span>RECIPE</span> FOR<br/> WEEK</h1>
            <p className='details'>Hey! The secret is the ingredients.</p>
            <div className='header-btns'>
                <a  className='header-btn'><Link to="contact" smooth={true} duration={2000}>Contact us</Link></a>
            </div>
        </div>
    </div>
  )
}

export default Header;