import React, {useState, useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Graphicframe from '../../components/Frames/graphics'
import Webframe from '../../components/Frames/web'
import TextCard from '../../components/textcard'
import App1 from '../../Assets/images/appimg1.jpg'
import App2 from '../../Assets/images/appimg2.jpg'
import App3 from '../../Assets/images/appimg3.jpg'
import App4 from '../../Assets/images/appimg4.jpg'
import App5 from '../../Assets/images/appimg5.jpg'
import Leaf from '../../Assets/SVGs/leaf.svg'
const Appage = (props)=>{
    useEffect(() => {
        Aos.init({duration:2000})
        
    }, []);
const [texts, setText] = useState([`App design `, `Our mobile designs bring intuitive digital solutions `, `to your customers right at their fingertips.`]);
    return(
        <>
         <div className="topic">
            
            {texts.map((text) => (
                <TextCard  text={text} />
            
            ))}
        
        </div>
        <div className="web-grid">
            <div data-aos="fade-zoom-in"><img src={App1} />
                <div className=" first card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div data-aos="fade-zoom-in"><img src={App2}/>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div data-aos="slide-right"><img src={App3}/>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div data-aos="fade-zoom-in"><img src={App4}/>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div data-aos="slide-left"><img src={App5}/>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
          

        </div>
        <div className="web-flex">
            <div className="flex1"><Webframe/></div>
            <div className="flex2"><Graphicframe/></div>
        </div>
        <div className="graphics-leaf"><img src={Leaf}/></div>
                
        </>
    )
}
export default Appage