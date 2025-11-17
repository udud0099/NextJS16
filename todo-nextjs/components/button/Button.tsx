 import clsx from 'clsx'
import { buttonProps } from '../../types'

const Button = ({type, text, onClick, actionButton, bgColor, ...props}:buttonProps) => {
  return (
    <div>
        <button 
        onClick={onClick} type={type} 
        className={clsx(
            actionButton && 'text-white hover:bg-blue-800 p-4 m-2',
            `${bgColor} hover:${bgColor} p-4 m-2`
        )}
        >{text}</button>
      
    </div>
  )
}

export default Button
