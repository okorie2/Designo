import React from 'react'
import BgLogo from '../../Assets/SVGs/mylogo.svg'
import Ill1 from '../../Assets/SVGs/sth.svg'
import Ill2 from '../../Assets/SVGs/sthh.svg'
import Ill3 from '../../Assets/SVGs/sthhh.svg'
import Phone from '../../Assets/images/phone.png'
import Col1 from '../../Assets/images/col1.jpg'
import Col2 from '../../Assets/images/col2.jpg'
import Col3 from '../../Assets/images/col3.jpg'
import '../Home/home.css'
 const Home =()=>{

    return(
        <div>
            <div className="home">
        <div className="homesvg"><img src={BgLogo} /></div>
        <div className="homebg" >
            <div className="homeintro">
            <h3>Award-winning custom<br/> designs and digital branding solutions</h3>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                and engaging brand experiences. Find out more about our services.</p>
                <button className="myButton">Learn More</button><br/>

            </div>
            <div className='phone'><img src={Phone}/></div>
            
            
        </div>
        </div>
        <div className="frames">
            <div> <img src={Col1}/><div className="frames-txt one"><a href="#"><h4>Web Design</h4><p>View Projects</p></a></div></div>
            <div><img src={Col2}/><div className="frames-txt two"><a href="#"><h4>App Design</h4><p>View Projects</p></a></div></div>
            <div><img src={Col3}/><div className="frames-txt three"><a href="#"><h4>Graphic Design</h4><p>View Projects</p></a></div></div>
        </div>
        <div className="illustration">
            <div><img src={Ill1}/><h4> Passionate</h4><p>
            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
            art, design, and technology into exciting new solutions.</p></div>
            <div><img src={Ill2}/><h4>Resourceful</h4><p>
            Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill our clients’ needs.</p></div>
            <div><img src={Ill3}/><h4>Friendly</h4><p>
            We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
            strive to give them the best experience a company can provide.</p></div>
        </div>
        </div>
    )
}
export default Home;