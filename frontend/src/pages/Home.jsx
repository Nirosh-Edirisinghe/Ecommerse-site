import React from 'react'
import Hero from '../components/Hero'
import LatestCollecton from '../components/LatestCollecton'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollecton/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home
