// import React from 'react'
import Animation from "../components/Helpers/Animation"
import Hero from "../components/HomePageRow/Hero"
import Info from "../components/HomePageRow/Info"
import Menu from "../components/HomePageRow/Menu"

const HomePage = () => {
  return (
    <Animation>
        <Hero/>
        <Info/>
        <Menu/>
    </Animation>
  )
}

export default HomePage