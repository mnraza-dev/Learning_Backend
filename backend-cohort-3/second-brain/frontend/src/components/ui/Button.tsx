import { ReactElement } from 'react'
interface ButtonProps {
    variant: 'primary' | 'secondary'
    size: 'sm' | 'md' | 'lg'
    text: string
    startIcon?: ReactElement
    endIcon?: ReactElement
    onClick: () => void
}
const defaultStyles = "flex min-w-[160px] w-fit gap-2 items-center justify-center cursor-pointer rounded-lg"
const variantStyles = {
    "primary": "bg-blue-500 hover:bg-blue-700 text-white font-semibold ",

    "secondary": "bg-[#dabbff] hover:bg-[#b792e3]  text-[#7e5da6] hover:text-[#3e265c] font-semibold",
}
const sizeStyles = {
    "sm": "px-2 py-1 text-sm",
    "md": "px-4 py-2 text-md",
    "lg": "px-6 py-4 text-xl",
}
const Button = (props: ButtonProps) => {
    return (
        <button className={`${defaultStyles} ${variantStyles[props.variant]} ${sizeStyles[props.size]}`}
            onClick={props.onClick} >
        {props.startIcon}
           {props.text}
        {props.endIcon}
        </button>
    )
}
export default Button