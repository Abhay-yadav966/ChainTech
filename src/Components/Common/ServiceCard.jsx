import React from 'react'
import Logo from '../../assets/Group 1000001349.png'
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({data}) => {

    console.log("color", data?.bgColor, "  = typeof-->", typeof(data?.bgColor));

  return (
    <div className={`border-[3px] border-black rounded-3xl w-[293px] ${data?.bgColor} `} >

        {/* header part */}
        <div className='flex items-center gap-2 px-4 py-3 border-b-[2px] border-black ' >
            <img src={Logo} alt="logo" />
            <h5 className='font-semibold text-lg ' >Join Development</h5>
        </div>

        {/* middle part */}
        <div className='flex flex-col items-center pt-10 gap-10 ' >
            <p className='font-semibold text-2xl text-black  text-center w-[53%] ' >{data?.title}</p>
            <img src={data?.logo} alt="" className='h-[156px] w-[261px] object-cover ' />
        </div>

        {/* button part */}
        <div className=' py-3 px-5 flex justify-end border-t-[2px] border-black ' >
            <button className='flex items-center gap-2 font-semibold text-lg border-[2px] border-black rounded-full px-3 py-2 bg-white hover:bg-black hover:text-white ' >
                Explore <span className='p-2 text-black rounded-full bg-gradient-to-r from-[#00FFA7] to-[#FFFF00]' ><FaArrowRightLong/></span> 
            </button>
        </div>
    </div>
  )
}

export default ServiceCard;