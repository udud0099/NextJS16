import React from 'react'



const Button = ({text}) => {
  return (
    <div>
      <button className='bg-blue-400 px-4 py-2 rounded border-0 text-sm text-gray-700 font-semibold cursor-pointer'>{text}</button>
    </div>
  )
}

export default Button
