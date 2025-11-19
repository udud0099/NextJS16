
'use client'

import { useState } from "react"
import Button from "../button/Button"
import { MdEdit } from "react-icons/md"
import Form from "../form/Form"
import Input from "../input/Input"
import { todoProps } from "../../types"
import * as actions from "@/actions"



const EditTodo = ({todo}: {todo:todoProps}) => {
    const [editTodoState, setEditTodoState] = useState(false)

    const handleEdit = () => {
      if(todo.isCompleted) return
        setEditTodoState(!editTodoState)
    } 
    const handleSubmit = () =>{
        setEditTodoState(false)

    }


  return (
    <div>
      <Button onClick={handleEdit} text={<MdEdit />} actionButton/>

      {
        editTodoState? (
            <Form action={actions.editTodo} onSubmit={handleSubmit}>
                <Input name="inputId" value={todo.id} type="hidden"></Input>
                <div>
                    <Input name="newTitle" placeholder="edit todo..." type="text"></Input>
                <Button type="submit" text="Save"></Button>
                </div>
            </Form>
        ):null
      }




    </div>
  )
}

export default EditTodo
