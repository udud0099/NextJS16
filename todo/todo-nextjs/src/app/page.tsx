
 import { prisma } from "@/utils/prisma";
import AddTodo from "../../components/todos/AddTodo";
import Todo from "../../components/todos/Todo";


 async function getData(){
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted:true,
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  return data
 }

export default async function Home() {
  const data = await getData()
  return (
     <>
     <div>
      <h1>home page</h1>
      <div>
        <AddTodo />
      </div>
      <br />
      <div>
        {data.map((todo, id)=>(
          <div   key={id} className="my-1">
            <Todo todo={todo} /></div>
        ))}
      </div>
     </div>
     </>
  );
}
