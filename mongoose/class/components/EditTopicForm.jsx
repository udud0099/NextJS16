'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const EditTopicForm = ({id, title, des}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDes, setNewDes] = useState(des)
  const route = useRouter()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({newTitle, newDes})
      })

      if(!res.ok) {
        throw new Error ("fail to update")
      }
      route.push('/')


    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <div className='w-7xl mx-auto'>
        <h1>edit topic</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" className='w-full border-white outline-white border-2 p-2 mb-4' value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
            <input type="text" className='w-full border-white outline-white border-2 p-2 mb-4' value={newDes} onChange={(e)=>setNewDes(e.target.value)}/>
            <button type='submit' className='w-full border-white outline-white border-2 p-2 mb-4 cursor-pointer'>edit topic</button>
        </form>
      
    </div>
    </div>
  )
}

export default EditTopicForm
