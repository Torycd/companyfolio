// import React from 'react'
import Animation from "../components/Helpers/Animation"
import Brand from "../components/HomePageRow/Brand"
import Hero from "../components/HomePageRow/Hero"
import Info from "../components/HomePageRow/Info"
import Menu from "../components/HomePageRow/Menu"
import Services from "../components/HomePageRow/Services"

const HomePage = () => {
  return (
    <Animation>
        <Hero/>
        <Info/>
        <Menu/>
        <Services/>
        <Brand/>
    </Animation>
  )
}

export default HomePage