import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../images/logo.png";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div >
        <nav>

        {/* desktop */}
        <div className='navbar'>
            <div ><Link to="/"> <img className='navbar-img' src={Logo} alt='<a href="https://www.freepik.com/free-vector/cute-caravan-white-background_23725008.htm#query=caravan&position=3&from_view=search&track=sph&uuid=42049925-8301-49c2-92b3-2929c5a345a5">1mage by brgfx</a> on Freepik' /></Link></div>
            <ul className='navbar-menu'>
            <li className='navbar-items'>{" "}<Link className="navbar-links" to="/home">Home</Link></li>
            <li className='navbar-items'>{" "}<Link className="navbar-links" to="/about">About </Link></li>
            <li className='navbar-items'><Link  className="navbar-links" to="/vehiclemodels">Vehicle Models</Link></li>
            <li className='navbar-items'><Link className="navbar-links" to="/testimonials">Testimonials</Link></li>
            <li className='navbar-items'><Link className="navbar-links" to="/ourteam">Our Team</Link></li>
            <li className='navbar-items'><Link className="navbar-links" to="/contact">Contact</Link></li>
            </ul>
            <div className='navbar-buttons'>
                <Link to="/" className='navbar_buttons_sign_in'>Sign In</Link>
                {" "}<Link to="/" className='navbar_buttons_register'>Register</Link>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar