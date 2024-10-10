import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Job({ deleteJob }) {

    const navigate = useNavigate()
    const { id } = useParams();
    const job = useLoaderData()

    const onClickDelete = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this listing?')

        if (!confirm) return

        deleteJob(jobId)
        toast.success('Job Deleted Successfully')
        navigate('/jobs')
    }

  return (
    <>
        <div id='back-btn'>
            <Link to='/jobs'>
            <FaArrowLeft className='back-icon'/> Job Listings
            </Link>
        </div>
        <section id='job-section'>
            <div className='job-info'>
                <div className='job-outline'>
                    <p className='job-type'>{job.type}</p>
                    <h1 className='job-outline-title'>{job.title}</h1>
                    <FaMapMarker className='location-icon'/> 
                    <p className='job-location'>{job.location}</p>
                </div>
                <div className='job-details'>
                    <h3 className='indigo-clr-600'>Job Description</h3>
                    <p className='job-details-description'>{job.description}</p>

                    <h3 className='indigo-clr-600'>Salary</h3>
                    <p className='job-details-salary'>{job.salary} / Year</p>
                </div>
            </div>
            <div className='sidebar'>
                <div className='company-info'>
                    <h3 className='bold-font indigo-clr-600'>Company Info</h3>

                    <h2 className='company-name'>{job.company.name}</h2>
                    <p className='company-description'>{job.company.description}</p>

                    <h3 className='font-bold-500'>Contact Email:</h3>
                    <p className='company-contact'>{job.company.contactEmail}</p>

                    <h3 className='font-bold-500'>Contact Phone:</h3>
                    <p className='company-contact'>{job.company.contactPhone}</p>
                </div>

                <div className='manage-job'>
                    <h3 className='font-bold'>Manage Job</h3>
                    <div className='job-cta-container'>
                        <Link to={`/edit-job/${job.id}`} id='edit-btn' className='job-cta-btns'>Edit Job</Link>
                        <button id='del-btn' className='job-cta-btns' onClick={() => onClickDelete(job.id)}>Delete Job</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export {Job as default, jobLoader}