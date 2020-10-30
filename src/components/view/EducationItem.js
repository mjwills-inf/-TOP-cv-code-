import React from 'react'

export default function EducationItem(props) {

  const { school, subject, yearGraduate, qualification } = props.data

  return (
    <div className="experience-item-div">
      <p>School: {school}</p>
      <p>Subject: {subject}</p>
      <p>Year Graduated: {yearGraduate}</p>
      <p>Qualification: {qualification}</p>
      
    </div>
  )
}
