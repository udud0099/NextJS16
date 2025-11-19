'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
 


export default function Home() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({
    title:"", des:""
  })
  const router = useRouter()


  const fetchTodos = async () => {
    try {
      const res = await fetch("/api/Todo")
      const data = await res.json()
      setTodos(data || [])
      console.log(data);
      
    } catch (error) {
      // console.log("fail to load data", error);
      toast.error("fail to load data")
      
    }
  }

  const addTodo = async () => {
    if(!newTodo.title || !newTodo.des){
      toast.error("all fileds req")
      return
    }

    try {
      const res = await fetch('/api/Todo', {
        method: "POST",
        headers: {
          'Content-Type' : "application/json"
        }, 
        body: JSON.stringify(newTodo)
      })
      const data = await res.json()
      setTodos([...todos, data.todo])
      setNewTodo({
        title:"",
        des:""
      })
      toast.success("todo crast")
      
    } catch (error) {
      toast.error("fail to add todo")
    }
  }

  const deleteTodo = async (id) => {
    try {
      await fetch(`/api/Todo/${id}`,{
        method: "DELETE"
      })
      setTodos(todos.filter((todo)=> todo._id !==id))
      toast.success("todo delete")
    } catch (error) {
      toast.error("fail delete")
    }
  }

  useEffect(() =>{
    fetchTodos()
  },[])


  return (
     <>
     home page

     <div>
      form
      <ToastContainer />
      <div>
        <input type="text" placeholder="title " value={newTodo.title} onChange={(e) =>setNewTodo({...newTodo, title:e.target.value})}/>
        <br />
        <input type="text" placeholder="des " value={newTodo.des} onChange={(e) =>setNewTodo({...newTodo, des:e.target.value})}/>
        <br />
        <button onClick={addTodo}>add</button>
      </div>
     </div>
     <br />
     <br />
     <br />
     <div>
      {
        todos.map((todo, index) =>(
          <div key={index} className="bg-gray-400 p-4 m-2">
            <h1>{todo.title}</h1>
            <h3>{todo.des}</h3>
            <div>
              <button>e</button> 
     <br />
              <button onClick={()=>deleteTodo(todo._id)}>d</button>
            </div>
          </div>
        ))
      }
     </div>
     
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     </>
  );
}
