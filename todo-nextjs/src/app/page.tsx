
 import { prisma } from "@/utils/prisma";
import AddTodo from "../../components/todos/AddTodo";


 async function getData(){
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted:true,
    },
    orderBy:{
      createdAt:"asc"
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
          <div   key={id} className="my-1">{todo.title}</div>
        ))}
      </div>
     </div>
     </>
  );
}
