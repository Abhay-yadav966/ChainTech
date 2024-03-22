import React from 'react'

const HeroSection = () => {
  return (
    <>
        <section className="w-11/12 max-w-7xl flex flex-col items-center mx-auto pb-10" >
        {/* heading */}
        <h1 className=" font-black text-[120px] text-white" >WELCOME</h1>
        <h2 className=" font-black text-[120px] text-white " >TO <span className="font-extrabold text-[120px] bg-gradient-to-r from-[#00FFA7] to-[#FFFF00] text-transparent bg-clip-text " >CHAINTECH</span></h2>

        {/* paragraph */}
        <p className="font-medium text-lg text-white text-center w-3/5 " >From square one to engineering excellence! PixelPlex assists in full-cycle software development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
      </section>
    </>
  )
}

export default HeroSection