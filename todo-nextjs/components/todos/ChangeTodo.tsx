

import * as actions from "@/actions"

import Button from '../button/Button'
import Form from '../form/Form'
import Input from '../input/Input' 
import { todoProps } from "../../types"
import { FaCheck } from "react-icons/fa"

const ChangeTodo = ({todo}: {todo:todoProps}) => {
  return (
    <Form action={actions.changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <Button text={<FaCheck />} type="submit" actionButton bgColor={todo.isCompleted? "bg-green-600" : "bg-blue-600"} ></Button>
         </Form>
  )
}

export default ChangeTodo
