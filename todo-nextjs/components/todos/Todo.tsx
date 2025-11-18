import { todoProps } from "../../types"
import ChangeTodo from "./ChangeTodo"
import DeleteTodo from "./DeleteTodo"
import EditTodo from "./EditTodo"



const Todo = ({todo}: {todo: todoProps}) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ===true ? "line-throush" : "none",
    opacity: todo.isCompleted ===true ? .5 : 1,
  }
  return (
    <div style={todoStyle} className="bg-gray-800 my-2">
        {/* change todo */}
    <ChangeTodo todo={todo} /> 

    <div>
      {todo.title}
    </div>

        {/* edit todo */}
<div>

  <EditTodo todo={todo} />
</div>

        {/* delete todo */}
        <DeleteTodo todo={todo} />
      
    </div>
  )
}

export default Todo
