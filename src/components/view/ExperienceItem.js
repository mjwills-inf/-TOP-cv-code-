import React from 'react'
import uniqid from 'uniqid'

export default function ExperienceItem(props) {

  const { companyName, position, startDate, endDate, duties} = props.data

  return (
    <div className="experience-item-div">
      <p>Company: {companyName}</p>
      <p>Position: {position}</p>
      <p>Start date: {startDate}</p>
      <p>End date: {endDate !== '' ? endDate : `n/a`}</p>
      <h5>Duties</h5>
      <ul>
        {duties.map((item) =>
          <li className="experience-duties" key={uniqid()}>{item}</li>
        )}
      </ul>
    </div>
  )
}
