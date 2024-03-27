import React, { useState } from 'react'
import Logo from '../../assets/Group.png'
import {NavbarData} from '../../data/NavbarData'

const Navbar = () => {

    // state variable for showing current tab
    const [tab, setTab] = useState(NavbarData[0].title);
    
  return (
    <div className=' w-11/12 max-w-7xl mx-auto py-6 flex items-center' >
        {/* image */}
        <img src={Logo} alt="Logo Image" />

        {/* navbar */}
        <nav className='mx-auto' >
            <ul className='flex items-center gap-5' >
                {
                    NavbarData?.map((element) => (
                        <li key={element?.id}
                            onClick={() => setTab(element?.title)}
                            className={`${tab === element?.title ? "text-[#00FFA7]" : "text-white"} font-semibold text-lg cursor-pointer`}
                        >
                            {element?.title}
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;