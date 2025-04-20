import SidebarItem from "./SidebarItem"

const Sidebar = () => {
    return (
        <div className="fixed mt-16  left-0 top-0 border-r w-48 h-screen bg-white">
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
        </div>
    )
}

export default Sidebar