'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const RemoveBtn = ({id}) => {
  const router = useRouter()
  const removeTopic = async () =>{
    const confiremed = confirm("are you sure ")
    if(confiremed){
     await fetch(`http://localhost:3000/api/topics?id=${id}`, {method:"DELETE"})

     router.refresh()
    }
  }
  return (
    <button onClick={removeTopic} className='bg-red-500 text-white p-4 mb-2 inline-block mr-9'>
      D  
    </button>
  )
}

export default RemoveBtn
