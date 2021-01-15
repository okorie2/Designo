import React from 'react'
import Leaf from '../../Assets/SVGs/leaf.svg'
import '../Contact page/contact.css'
import Ill1 from '../../Assets/SVGs/sth.svg'
import Ill2 from '../../Assets/SVGs/sthh.svg'
import Ill3 from '../../Assets/SVGs/sthhh.svg'
const Contact = ()=>{
    return(
        <>
        <div className="contactflex">
            <div className="contacttext">
                <h2>Contact Us</h2>
                <p> Ready to take it to the next level? Let’s talk about your project or <br/> idea and find out how 
                    we can help your business grow. If you are<br/> looking for unique digital experiences that’s 
                    relatable to your users,<br/> drop us a line.</p>
            </div>
            <div className="contactform">
                <div><input type="text" placeholder="name"/> </div><br/>
                <div><input type="text" placeholder="Email address"/></div><br/>
                <div><input type="text" placeholder="Phone"/></div><br/>
                <div><input type="text" placeholder="Your message"/></div><br/>
                <button className="myButton" type="submit">submit</button>
            </div>
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
        <div className="contact-leaf"><img src={Leaf}/></div>
        </>
    )
}
export default Contact