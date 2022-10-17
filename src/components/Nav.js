import React, {useState} from 'react'
import icon from '../images/icon.png'
import './Nav.css'


function Nav() {
    const handleClick = () => {
      //cuando esta en true lo pasa a false y viceversa
    }
    return (
        <nav>
            <a href="/Characters"><img className="icon" src={icon} alt='Rick and Morty'/></a>
            <h2>The Rick and Morty <b>API</b></h2>
            <div>
                <a className="tag" href="/Characters">Characters</a>
                <a className="tag" href="/Dimensions">Dimensions</a>
                <a className="tag" href="/Episodes">Episodes</a>
            </div>
        </nav>


    )

}


export default Nav