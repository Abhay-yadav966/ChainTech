import React from 'react'
import Logo from '../../assets/Group.png'

const Footer = () => {
  return (
    <>
        <footer className='py-10 flex flex-col items-center gap-7' > 
            {/* image */}
            <img src={Logo} alt="" className='' />

            {/* border */}
            <div className='border-b border-[#5E5E5E] w-[700px] mx-auto ' ></div>

            {/* policies */}
            <p className='font-medium text-sm text-center text-[#98A6AC]' >© 2024 All Rights Reserved -  Chaintech Network</p>
        </footer>
    </>
  )
}

export default Footer;