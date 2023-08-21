import React from 'react'
import Header from '../Components/Header'
import Body from '../Components/Body'
import SubHeader from '../Components/SubHeader'
import StickBar from '../Components/StickBar'


function Home() {
  return (
    <div>
      <Header />
      <StickBar />
      <SubHeader />
      <Body />
    </div>
  )
}

export default Home