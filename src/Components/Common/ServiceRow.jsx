import React from 'react'
import { ServicesData } from '../../data/ServicesData';
import ServiceCard from './ServiceCard';

const ServiceRow = () => {

  return (
    <div className='flex items-center justify-center flex-wrap gap-[26px] ' >
        {
            ServicesData?.map((data) => (
                <div key={data?.id} >
                    <ServiceCard data={data} />
                </div>
            ))
        }
    </div>
  )
}

export default ServiceRow;