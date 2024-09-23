/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {FiSearch} from  "react-icons/fi" 
import { FaMapPin } from "react-icons/fa6";


const Banner = ({query,handleInputChange}) => {

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 bg-slate-200'><h1 className='text-5xl font-bold text-primary mb-3'>Find Your <span className='text-blue'>Dream Job</span> Here</h1>
      <p className='text-lg text-black/70 mb-8'>Thousands of jobs in different countries are waiting for you</p>

      <form>
       <div className='flex justify-start md:flex-row flow-col md:gap-0 gap-4'>
        <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>

         <input type="text" placeholder='Search Jobs Here' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6'

         onChange ={handleInputChange}
         value={query}
          />
         <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
        </div>
        <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>

         <input type="text" placeholder='Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6'

         onChange ={handleInputChange}
         value={""}
          />
         <FaMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
        </div>
        <button type='submit' className='bg-blue px-8 text-white md: rounded-s-none rounded'>Search</button>
       </div>
      </form>
    </div>



  )
}

export default Banner