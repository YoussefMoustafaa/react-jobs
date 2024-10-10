import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddJobPage({ addJobSubmit }) {

  const [jobType, setJobType] = useState('Full-time')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobSalary, setJobSalary] = useState('Under $50K')
  const [jobLocation, setJobLocation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const newJob = {
      title: jobTitle,
      type: jobType,
      location: jobLocation,
      description: jobDescription,
      salary: jobSalary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      }
    }

    addJobSubmit(newJob)
    navigate('/jobs')
  }

  return (
    <section id='add-job-section'>
      <div id='add-job-container'>
        <form onSubmit={submitForm}>
          <h2>Add Job</h2>

          <div>
            <label htmlFor="job-type">
              Job Type
            </label>
            <select 
              name="job-type" 
              id="job-type" 
              required
              value={jobType}
              onChange={e => setJobType(e.target.value)}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label htmlFor="job-title">Job Listing Name</label>
            <input 
              type="text" 
              name='job-title'
              id="job-title"
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea 
              name="description" 
              id="description"
              rows='4'
              required
              placeholder='Add any job duties, expectations, requirements, etc'
              value={jobDescription}
              onChange={e => setJobDescription(e.target.value)}
            >
            </textarea>
          </div>

          <div>
            <label htmlFor="job-salary">Salary</label>
            <select 
              name="job-salary" 
              id="job-salary"
              required
              value={jobSalary}
              onChange={e => setJobSalary(e.target.value)}
            >
              <option value='Under $50K'>Under $50K</option>
              <option value='$50K - 60K'>$50K - $60K</option>
              <option value='$60K - 70K'>$60K - $70K</option>
              <option value='$70K - 80K'>$70K - $80K</option>
              <option value='$80K - 90K'>$80K - $90K</option>
              <option value='$90K - 100K'>$90K - $100K</option>
              <option value='$100K - 125K'>$100K - $125K</option>
              <option value='$125K - 150K'>$125K - $150K</option>
              <option value='$150K - 175K'>$150K - $175K</option>
              <option value='$175K - 200K'>$175K - $200K</option>
              <option value='Over $200K'>Over $200K</option>
            </select>
          </div>

          <div>
            <label htmlFor="job-location">Location</label>
            <input 
              type="text" 
              name="job-location" 
              id="job-location"
              required
              placeholder='Company Location'
              value={jobLocation}
              onChange={e => setJobLocation(e.target.value)}
            />
          </div>

          <h3>Company Info</h3>

          <div>
            <label htmlFor="company-name">Company Name</label>
            <input 
              type="text" 
              name="company-name" 
              id="company-name"
              required
              placeholder='Company Name'
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="company-description">Company Description</label>
            <textarea 
              name="company-description" 
              id="company-description"
              required
              rows='4'
              placeholder='What does your company do?'
              value={companyDescription}
              onChange={e => setCompanyDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            {/* create input for contact email */}
            <label htmlFor="contact-email">Contact Email</label>
            <input
              type="email"
              name="contact-email"
              id="contact-email"
              required
              placeholder='Company Email'
              value={contactEmail}
              onChange={e => setContactEmail(e.target.value)}
            />
          </div>

          <div>
            {/* create input for contact phone number */}
            <label htmlFor="contact-phone">Contact Phone Number</label>
            <input
              type="tel"
              name="contact-phone"
              id="contact-phone"
              placeholder='Optional Company Phone Number'
              value={contactPhone}
              onChange={e => setContactPhone(e.target.value)}
            />
          </div>

          <div id='submit-job-container'>
            <button type='submit'>Add Job</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default AddJobPage