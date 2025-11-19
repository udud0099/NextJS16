 import { inputProps } from '../../types'

const Input = ({name, type, placeholder, value}: inputProps) => {
  return (
    <div>
      <input name={name} type={type} placeholder={placeholder} value={value} className='border-1 px-4 py-2 m-2'/>
    </div>
  )
}

export default Input
