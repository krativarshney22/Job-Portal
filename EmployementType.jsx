/* eslint-disable react/prop-types */
import React from 'react'
import InputField from '../components/inputField'

const EmployementType = ({handleChange}) => {
  return (
    <div>
     <h4 className='text-lg font-medium mb-2'>Employement Type</h4>
     <div>
     <label className='sidebar-label-container'>
     <input type="radio" name="test" value="" 
     onChange={handleChange}/>
     <span className="checkmark"></span>Any
    </label>
    <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
    <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
    <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>

     </div>
     </div>
  )
}

export default EmployementType