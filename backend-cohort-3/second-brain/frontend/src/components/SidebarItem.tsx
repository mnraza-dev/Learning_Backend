import { ReactElement } from "react"
interface SidebarItemProps {
    text: string
    icon: ReactElement
}
const SidebarItem = (props: SidebarItemProps) => {
    return (
        <div className="rounded-md px-6 cursor-pointer flex py-2 items-center gap-2 hover:bg-[#e9dbfb]">
            {props.icon}
            <span className="text-gray-950">{props.text}</span>
        </div>
    )
}

export default SidebarItem