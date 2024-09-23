/* eslint-disable react/prop-types */
import React from 'react'
import InputField from '../components/inputField'

const ExpirienceLevel = ({handleChange}) => {
  return (
   <div>
   <h4 className='text-lg font-medium mb-2'>Work Expirience</h4>

   <div>

    <InputField handleChange={handleChange} value="internship" title="Internship" name="test"/> 
    <InputField handleChange={handleChange} value="Any expirience" title="Any expirience" name="test"/>
    <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>

   </div>
  </div>
  )
}

export default ExpirienceLevel