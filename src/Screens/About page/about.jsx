import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Hero from '../../Assets/images/abtimg1.jpg'
import Real from '../../Assets/images/abtimg2.jpg'
import World from '../../Assets/images/abtimg3.jpg'
import Ill1 from '../../Assets/SVGs/sth.svg'
import Ill2 from '../../Assets/SVGs/sthh.svg'
import Ill3 from '../../Assets/SVGs/sthhh.svg'
import '../About page/about.css'
import Leaf from '../../Assets/SVGs/leaf.svg'
import Icon from '../../components/Icons/icons'
const About = ()=>{
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    return(
        <>
        <div className="aboutflex">
            <div id="leftflex">
                <h2>About us</h2>
                <p> Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                    We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
                    that make real impact. We’re always looking forward to creating brands, products, and 
                    digital experiences that connect with our clients' audiences.
                </p>
            </div>
            <div><img src={Hero}/></div>
        </div>

        <div className="aboutflex2" data-aos="fade-zoom-in">
        <div className="world"><img src={World} className="world2"/></div>
            <div id="rightflex">
                <h2>World-class talent</h2>
                <p> We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                    crafted from concept to launch, ensuring success in its given market. We are constantly updating 
                    our skills in a myriad of platforms..
                </p>
                <p> Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                    are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
                    Clients have always been impressed with our high-quality outcomes that encapsulates their 
                    brand’s story and mission.
                </p>
            </div>
            
        </div>
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
        
        <div className="aboutflex2" data-aos="flip-left">
       
            <div id="rightflex">
                <h2>The real deal</h2>
                <p> As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
                    opportunity. We make design and technology more accessible and give you tools to measure success.
                </p>
                <p> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
                    we inspire audiences to take action and drive real results.

                </p>
                
            </div>
            <div className="real"><img src={Real} className="real2"/></div>
            </div>
            <div className="abt-leaf"><img src={Leaf}/></div>
            <div className="abt-leaf2"><img src={Leaf}/></div>
            
        </>
    )
}
export default About
