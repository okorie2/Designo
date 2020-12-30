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
          <div className = "logo-nav">
            <div className = "logo-container">
              <a href = "#">
               <div ><EcoIcon className="logo"/><b className="title"> D E S I G N O</b></div>
              </a>
            </div>
            <ul className={ click ? "nav-options active" : "nav-options"}>
              <li className = "option" onClick={closeMobileMenu}>
                <a href="#">OUR COMPANYS</a>
              </li>
              <li className = "option" onClick={closeMobileMenu}>
                <a href="#">LOCATION</a>
              </li>
              <li className = "option" onClick={closeMobileMenu}>
                <a href="#">CONTACT</a>
              </li>
            </ul>
            </div>  
            <ul className="signin-up">
              <li className='sign=in' onClick={closeMobileMenu}>
                <a href="#">SIGN-IN</a>
              </li>
              <li className='sign=in' onClick={closeMobileMenu}>
                <a href="#" className="signup-btn">SIGN-UP</a>
              </li>
            </ul>
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

