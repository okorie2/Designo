import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Graphframe from '../../components/Frames/graphics'
import Appframe from '../../components/Frames/app'
import BgLogo from '../../Assets/SVGs/mylogo.svg'
import Ill1 from '../../Assets/SVGs/sth.svg'
import Ill2 from '../../Assets/SVGs/sthh.svg'
import Ill3 from '../../Assets/SVGs/sthhh.svg'
import Leaf from '../../Assets/SVGs/leaf.svg'

import Phone from '../../Assets/images/phone.png'
import Col1 from '../../Assets/images/col1.jpg'
import Col2 from '../../Assets/images/col2.jpg'
import Col3 from '../../Assets/images/col3.jpg'
import Col4 from '../../Assets/images/col4.jpg'
import ColD5 from '../../Assets/images/cold5.jpg'
import ColD6 from '../../Assets/images/cold6.jpg'
import '../Home/home.css'

 const Home =()=>{
     useEffect(() => {
         Aos.init({duration:2000})
         
     }, []);
    return(
        <div>
            
            <div className="home">
      
                <div className="home-flex">
                    <div className="homeintro">
                    <h2>Award-winning custom<br/> designs and digital<br/> branding solutions</h2><br/>
                    <h4>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                     and engaging brand experiences. Find out more about our services.</h4>
                     <button className="myButton"><Link to ="/about">Learn More</Link></button>
                    </div>
                    <div className="phone">
                    
                    <img src={Phone}/>
                    </div>

                </div>
                <div className="leaf"><img src={Leaf}/></div>
                </div>

                <div className="home-flexgrid">
                    <div>
                    <div className="item1" data-aos="slide-up"> 
                        <div >
                        <h3><Link to="/web" className="weblink">Web Design</Link></h3>
                        <p><Link to="/web" className="weblink"> View Projects</Link> </p>
                        <h4>Passionate Each project starts with an in-dep </h4>
                        </div>
                       </div>
                    </div>
                    <div className="homeflex" data-aos="fade-down">
                        <div><Graphframe/></div><br></br>
                        <div><Appframe/></div>
                    </div>
                </div>
                
                   <div className="homesvg"><img src={BgLogo}/></div>
                  
        <div className="illustration" data-aos="fade-up">
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
        <div className="btm-leaf"><img src={Leaf}/></div>
        
        </div>
    )
}
export default Home;