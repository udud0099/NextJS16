import * as actions from "@/actions"
import Form from '../form/Form'
import Button from '../button/Button'
import Input from '../input/Input' 

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
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
