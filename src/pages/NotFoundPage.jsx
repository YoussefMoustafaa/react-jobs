import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className='not-found-section'>
        <FaExclamationTriangle className='exclamation-tri' />
        <h1>404 Not Found</h1>
        <p>This page does not exist</p>
        <Link to='/' className='go-back-btn'>Go Back</Link>
    </section>
  )
}

export default NotFoundPage