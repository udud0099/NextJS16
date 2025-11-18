import { FaTrash } from "react-icons/fa"
import { todoProps } from "../../types"
import Button from "../button/Button"
import Form from "../form/Form"
import Input from "../input/Input"
import * as actions from "@/actions"





const DeleteTodo = ({todo}: {todo:todoProps}) => {
  return (
     <Form action={actions.deleteTodo} >
        <Input type="hidden" name="inputId" value={todo.id}></Input>
        <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash />}></Button>
     </Form>
  )
}

export default DeleteTodo
