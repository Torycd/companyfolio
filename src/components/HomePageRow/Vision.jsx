// import React from 'react'
import image from "../../images/visionImage.jpeg"

const Vision = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-20 ">
        <img
          className="rounded-lg order-last md:order-first"
          src={image}
          alt="Hero"
        />
        <div>hh</div>
    </div>
  )
}

export default Vision