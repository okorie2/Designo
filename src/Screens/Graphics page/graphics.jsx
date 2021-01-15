import React, {useState} from 'react';
import Webframe from '../../components/Frames/web'
import Appframe from '../../components/Frames/app'
import TextCard from '../../components/textcard'
import Graphics1 from '../../Assets/images/graphics1.jpg'
import Graphics2 from '../../Assets/images/graphics2.jpg'
import Graphics3 from '../../Assets/images/graphics3.jpg'
import Leaf from '../../Assets/SVGs/leaf.svg'
import '../Graphics page/graphics.css'
const Graphics = (props)=>{
const [texts, setText] = useState([` Graphic design `, `  We deliver eye-catching branding materials that are  `, `tailored to meet your business objectives.`]);
    return(
        <>
         <div className="topic">
            
            {texts.map((text) => (
                <TextCard  text={text} />
            
            ))}
        
        </div>
        <div className="web-grid">
            <div><img src={Graphics1}/>
                <div className=" first card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div><img src={Graphics2}/>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div><img src={Graphics3}/>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
           

        </div>
        <div className="web-flex">
            <div className="flex1"><Appframe/></div>
            <div className="flex2"><Webframe/></div>
        </div>
        <div className="graphics-leaf"><img src={Leaf}/></div>
   
        </>
    )
}
export default Graphics