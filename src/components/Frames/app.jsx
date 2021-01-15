import React from 'react'
import {Link} from 'react-router-dom'
import '../Frames/frames.css'
const Appframe =(props)=>{
    return(
        <>
        <div className="item2">
            <div>
                <h3><Link to="/app" >App Design</Link></h3>
                <h4><Link to="/app" > View Projects</Link> </h4>
            </div>
        </div>
        
                    
        
        </>
    )

}
export default Appframe