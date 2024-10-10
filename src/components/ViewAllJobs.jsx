import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <section className='view-all-jobs-section'>
        <Link to="/jobs" className='view-all-jobs-btn'>
            View All Jobs
        </Link>
    </section>
  )
}

export default ViewAllJobs