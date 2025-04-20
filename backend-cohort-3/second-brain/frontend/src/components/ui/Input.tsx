
interface InputProps {
    type: "text" | "password" | "email" | "number"
    placeholder?: string

}
const Input = (props: InputProps) => {
    return (
        <input className="px-4 py-2 w-3/4 mb-2 rounded-md outline-gray-600 border border-gray-300" type={props.type} placeholder={props.placeholder} />
    )
}

export default Input