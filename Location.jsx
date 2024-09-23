/* eslint-disable react/prop-types */
import React from 'react'
import InputField from '../components/inputField'

const Location = ({handleChange}) => {
  return (
    <div>
     <h4 className='text-lg font-medium mb-2'>Location</h4>

     <div>
      <label className='sidebar-label-container'>
       <input type="radio" name="test" value="" 
       onChange={handleChange}/>
       <span className="checkmark"></span>All
      </label>

      <InputField handleChange={handleChange} value="london" title="London" name="test"/> 
      <InputField handleChange={handleChange} value="brussels" title="Brussels" name="test"/>
      <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test"/>
      <InputField handleChange={handleChange} value="madrid" title="Madrid" name="test"/>

     </div>
    </div>
  )
}

export default Location