import React from 'react'
import Form from '../form/Form'
import Button from '../button/Button'
import Input from '../input/Input'
import { createTodo } from '@/actions'

const AddTodo = () => {
  return (
    <div>
      <Form action={createTodo}>
        <div>
            <Input name="input" type="text"/>
            <br />
            <Button type='submit' text="Add" bgColor='bg-red-700'/>
        </div>
      </Form>
    </div>
  )
}

export default AddTodo
