import React from 'react'
import BasicData from './dataAbout/BasicData'
import BasicDataCard from './dataAbout/BasicDataCard'
import FeatureVideo from './dataAbout/FeatureVideo'
import NewsStudent from './ActivityAndNews/NewsStudent'

export default function MainData() {
  return (
    <>
      <div className='container mx-auto mt-10'>
        <div className="w-full px-4 py-6 md:py-10">
          <div className="max-w-screen-lg mx-auto">
            <NewsStudent />
            <BasicData />
            <BasicDataCard />
          </div>
        </div>
      </div>

      <div className="bg-[#C70039] ">
      <div className="container mx-auto px-4">
        <FeatureVideo />
      </div>
      </div>
    </>

  )
}
