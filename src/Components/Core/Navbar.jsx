import React from 'react'
import Logo from '../../assets/Group.png'
import {NavbarData} from '../../data/NavbarData'

const Navbar = () => {

    // state variable for showing current tab

  return (
    <div>
        {/* image */}
        <img src={Logo} alt="Logo Image" />

        {/* navbar */}
        <nav>
            <ul>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar;