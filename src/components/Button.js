import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="bg-gray-300 mx-5 py-1 px-2 rounded-md mb-8 w-20">{name}</button>
    </div>
  )
}

export default Button
