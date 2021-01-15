import React from 'react'
import Icon1 from '../../Assets/SVGs/icon.svg'
import Icon2 from '../../Assets/SVGs/icon2.svg'
import Icon3 from '../../Assets/SVGs/icon3.svg'
import '../Icons/icons.css'
const Icons = ()=>{
    return(
        <>
        <div className="Iconss">
            <div><img src={Icon1}/></div>
            <div><img src={Icon2}/></div>
            <div><img src={Icon3}/></div>
            
        </div>
        </>
    )
}
export default Icons