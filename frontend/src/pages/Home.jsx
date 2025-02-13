import React from 'react'
import Hero from '../components/Hero'
import LatestCollecton from '../components/LatestCollecton'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollecton/>
      <BestSeller/>
    </div>
  )
}

export default Home
