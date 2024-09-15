// import React from 'react'
import Animation from "../components/Helpers/Animation"
import Hero from "../components/HomePageRow/Hero"
import Info from "../components/HomePageRow/Info"

const HomePage = () => {
  return (
    <Animation>
        <Hero/>
        <Info/>
    </Animation>
  )
}

export default HomePage