import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceRow from '../Common/ServiceRow';

const ServicesSection = () => {
  return (
    <div>
      <section className="bg-white" >
        <div className="w-11/12 max-w-7xl mx-auto py-10 " >

          <div className='flex items-center justify-between' >
            {/* headings */}
            <div>
              <h1 className="font-semibold text-5xl" >Services We Offer</h1>
              <p className="font-medium text-lg" >Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
            </div>

            {/* buttons */}
            <div className='flex items-center gap-3' >
              {/* left */}
              <button
                type="button"
                className=""
              >
                <FaArrowLeftLong />
              </button>

              {/* right */}
              <button
                type='button'
                className='border border-black rounded-full p-2'
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>

          {/* service cards */}
          <ServiceRow/>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection;