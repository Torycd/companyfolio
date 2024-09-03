// import React from 'react'

const  Button = ({children, props }) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-700 text-white rounded-md px-5 py-2" {...props}>{children}</button>
  )
}

export default Button