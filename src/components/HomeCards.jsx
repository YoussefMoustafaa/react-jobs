import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <section id='home-cards'>
        <Card 
            title='For Developers' 
            subtitle='Browse our React jobs and start your career today' 
            btn='Browse Jobs'
            cardBg = 'card-gray-bg'
            btnClr = 'black-bg'
            path = '/jobs'
        />
        <Card 
            title='For Employers'
            subtitle='List your job to find the perfect developer for the role'
            btn='Add Job'
            cardBg = 'card-indigo-bg'
            btnClr = 'indigo-bg'
            path = '/add-job'
        />
    </section>
  )
}

export default HomeCards