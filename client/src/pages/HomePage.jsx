import React from 'react'
import PeopleList from '../components/PeopleList'
import JobLists from '../components/JobLists'
import Footer from '../components/Footer'
import HomeHero from './HomeHero'
const HomePage = () => {
  return (
    <>
      <div>
          <HomeHero />
          <JobLists isHome={true}/>
          <PeopleList className="px-12 mx-auto" isHome={true}/>
      </div>
    </>
  )
}

export default HomePage