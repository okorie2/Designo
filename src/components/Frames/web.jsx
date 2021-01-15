import React from 'react'
import {Link} from 'react-router-dom'
import '../Frames/frames.css'
const Webframe =(props)=>{
    return(
        <>
        <div className="item2">
            <div>
                <h3><Link to="/web" >Web Design</Link></h3>
                <h4><Link to="/web" > View Projects</Link> </h4>
            </div>
        </div>
        
                    
        
        </>
    )

}
export default Webframe