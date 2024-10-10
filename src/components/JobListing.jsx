import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({job}) => {

    const [showFullDescription, setFullDescription] = useState(false);

    let description = job.description;

    if (!showFullDescription)
        description = job.description.substring(0, 90) + '...';




  return (
    <div className='job-container'>
        <p className='job-type'>{job.type}</p>
        <h3 className='job-title'>{job.title}</h3>
        <p className='job-description'>{description}</p>
        <button onClick={() => setFullDescription((prevState) => !prevState)} className='more-btn'>
            {showFullDescription ? 'Less' : 'More'}
        </button>
        <h3 className='job-salary'>{job.salary}</h3>
        <div className='gray-line'></div>
        <div className='job-btns'>
            <div>
                <FaMapMarker className='location-icon'/>
                <p className='job-location'>{job.location}</p>
            </div>
            <Link to={`/jobs/${job.id}`} className='read-more-btn'>Read More</Link>
        </div>
    </div>
  )
}

export default JobListing