import React, {useState} from 'react'
import icon from '../images/icon.png'
import BurgerButton from './BurgerButton'

import './Nav.css'

function Nav() {
    const [clicked,setClicked] = useState(false)
    console.log(clicked)
    const handleClick = () => {
      //cuando esta en true lo pasa a false y viceversa
      setClicked(!clicked)
    }
    return (
        <nav>
            <a href="/"><img className="icon" src={icon}/></a>
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