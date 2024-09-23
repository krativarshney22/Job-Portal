/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import { FiClock, FiDollarSign, FiMapPin, FiCalendar } from 'react-icons/fi'

const Card = ({data}) => {
 const {companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description} =data;

  return (
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
      <img src={companyLogo} alt =""/>
      <div>
       <h4 className='text-primary mb-1 '>{companyName}</h4>
       <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
       <div className='text-primary/70 flex text-base gap-2 items-center'>
       <span className='text-sm font-sans flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
       <span className='text-sm font-sans flex items-center gap-2'><FiClock/>{employmentType}</span>
       <span className='text-sm font-sans flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}</span>
       <span className='text-sm font-sans flex items-center gap-2'><FiCalendar/>{postingDate}</span>
       
       </div>
       <p className='text-sm text-gray-500'>{description}</p>
      </div>
      </Link>
    </section>
  )
}

export default Card