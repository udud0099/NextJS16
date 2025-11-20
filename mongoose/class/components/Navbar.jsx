import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 mb-4 bg-gray-400'>
      <Link href={"/"}>Logo</Link>
      <Link href={"/addTopic"}>Add Topic</Link>
    </div>
  )
}

export default Navbar
