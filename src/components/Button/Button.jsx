// import React from 'react'

const  Button = ({children, props }) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-700 text-white rounded-md px-6 py-3" {...props}>{children}</button>
  )
}

export default Button