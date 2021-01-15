import React, {useState} from 'react'
import '../Navbar/navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import EcoIcon from '@material-ui/icons/Eco';
import {Link} from 'react-router-dom'
import Logo from '../../Assets/images/logo.png'



 const NavigationBar = (props)=>{
   const [click, setClick] = useState(false);
   const handleClick = ()=> setClick(!click);
   const closeMobileMenu = ()=> setClick(false);
   
    return(
        <>
        <div className = "header">
          <div>
        <EcoIcon className="logo title"/><Link to="/"><b className="title" > D E S I G N O</b></Link>
            <ul className={ click ? "nav-options active" : "nav-options"}>
            
              <li className = "option item" onClick={closeMobileMenu}>
                <Link to="/about">OUR COMPANY</Link>
              </li>
              <li className = "option item" onClick={closeMobileMenu}>
                <Link to="/location">LOCATIONS</Link>
              </li>
              <li className = "option item" onClick={closeMobileMenu}>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
            </div>  
            
            <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
          </div>  
        </>
    )
}
export default NavigationBar;

