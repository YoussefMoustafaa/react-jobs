import React from 'react'
import JobListing from './JobListing'
import { useState, useEffect } from 'react'

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log('There was an error fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <section id='job-listings-section'>
        <h2 id='job-listings-title'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        <div id='jobs-grid'>
          { loading ? <h2>Loading...</h2> : (
            jobs.map((job) => (
                <JobListing key={job.id} job={job} />
            ))
          ) }
        </div>
    </section>
  )
}

export default JobListings