import React, {useState} from 'react'
import TextCard from '../../components/textcard'
import Frames from '../../components/Frames/app'
import Graphicframe from '../../components/Frames/graphics'
import '../../components/Topic/topic.css'
import '../Web page/web.css'
import Web1 from '../../Assets/images/webimg1.jpg'
import Web2 from '../../Assets/images/webimg2.jpg'
import Web3 from '../../Assets/images/webimg3.jpg'
import Web4 from '../../Assets/images/webimg4.jpg'
import Web5 from '../../Assets/images/webimg5.jpg'
import Web6 from '../../Assets/images/webimg6.jpg'
import Leaf from '../../Assets/SVGs/leaf.svg'
const Web = (props)=>{
    const [texts, setText] = useState([`Web design `, `We build websites that serve as powerful marketing tools`, `and bring memorable brand experiences.`]);
    return(
        <>
         <div className="topic">
            
            {texts.map((text) => (
                <TextCard  text={text} />
            
            ))}
        
        </div>
        <div className="web-grid">
            <div className="tabflex">
                <div><img src={Web1}/></div>
                <div className=" first card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div className="tabflex">
                <div><img src={Web2}/></div>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div className="tabflex"> 
                <div><img src={Web3}/></div>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div className="tabflex">
                <div><img src={Web4}/></div>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div className="tabflex">
                <div><img src={Web5}/></div>
                <div className="card">
                    <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>
            <div className="tabflex">
                <div><img src={Web6}/></div>
                <div className="card">
                <h4>shipping</h4>A multi-carrier shipping website for ecommerce businesses
                </div>
            </div>

        </div>
        <div className="web-flex">
            <div className="flex1"><Frames/></div>
            <div className="flex2"><Graphicframe/></div>
        </div>
        <div className="graphics-leaf"><img src={Leaf}/></div>
   
        </>
    )
}
export default Web