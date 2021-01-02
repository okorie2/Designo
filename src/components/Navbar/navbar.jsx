import React, {useState} from 'react'
import '../Navbar/navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import EcoIcon from '@material-ui/icons/Eco';
import Logo from '../../Assets/images/logo.png'



 const NavigationBar = (props)=>{
   const [click, setClick] = useState(false);
   const handleClick = ()=> setClick(!click);
   const closeMobileMenu = ()=> setClick(false);
   
    return(
        <>
        <div className = "header">
          <div>
        <EcoIcon className="logo title"/><b className="title"> D E S I G N O</b>
            <ul className={ click ? "nav-options active" : "nav-options"}>
            
              <li className = "option item" onClick={closeMobileMenu}>
                <a href="#">OUR COMPANY</a>
              </li>
              <li className = "option item" onClick={closeMobileMenu}>
                <a href="#">LOCATIONS</a>
              </li>
              <li className = "option item" onClick={closeMobileMenu}>
                <a href="#">CONTACT</a>
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

