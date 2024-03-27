import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSection = () => {
  return (
    <div>
      <section className="bg-white" >
        <div className="w-11/12 max-w-7xl mx-auto" >

          <div>
            {/* headings */}
            <div>
              <h1 className="font-semibold text-5xl" >Services We Offer</h1>
              <p className="font-medium text-lg" >Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
            </div>

            {/* buttons */}
            <div>
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
                className=''
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection;