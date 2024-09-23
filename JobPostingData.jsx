/* eslint-disable react/prop-types */
import React from 'react'
import InputField from '../components/inputField'

const JobPostingData = ({handleChange}) => {
 const now = new Date();
 // console.log(now);
 const twentyFourHoursAgo =new Date(now -24 * 60*60*1000);
 const SevenDaysAgo =new Date(now -7 * 2460*60*1000);
 const ThirtyDaysAgo =new Date(now -30 * 24 * 60*60*1000);
 const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
 const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
 const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
//  console.log(twentyFourHoursAgoDate);
  return (
   <div>
    <h4 className='text-lg font-medium mb-2'>Posting Date</h4>
   <div>
   <label className='sidebar-label-container'>
    
    <input type="radio" name="test" value="" 
    onChange={handleChange}/>
    <span className="checkmark"></span>All time
   </label>

   <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 Hours" name="test"/> 
   <InputField handleChange={handleChange} value={SevenDaysAgoDate} title="Last 7 Days" name="test"/>
   <InputField handleChange={handleChange} value={ThirtyDaysAgoDate} title="Last Month" name="test"/>
   

  </div>
  </div>
  )
}

export default JobPostingData