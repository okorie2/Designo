import React from 'react'
import BgLogo from '../../Assets/SVGs/mylogo.svg'
import '../Home/home.css'
 const Home =()=>{

    return(
        <div>
        <div className="homesvg"><img src={BgLogo} /></div>
        <div className="homebg" >
            <div className="homeintro">
            <h3>Award-winning custom<br/> designs and digital branding solutions</h3>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                and engaging brand experiences. Find out more about our services.</p>
                <button className="myButton">Learn More</button>
            </div>
            
            
        </div>
        </div>
    )
}
export default Home;