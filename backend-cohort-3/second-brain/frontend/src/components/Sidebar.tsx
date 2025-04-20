import DocumentIcon from "../icons/DocumentIcon"
import LinkIcon from "../icons/LinkIcon"
import TagsIcon from "../icons/TagsIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YouTubeIcon from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
    return (
        <div className="fixed mt-16 left-0 top-0  border-r-2 border-gray-200 w-48 h-screen bg-white">
            <SidebarItem icon={<TwitterIcon />} text="Tweets" />
            <SidebarItem icon={<YouTubeIcon />} text="Youtube" />
            <SidebarItem icon={<DocumentIcon />} text="Documents" />
            <SidebarItem icon={<LinkIcon />} text="Links" />
            <SidebarItem icon={<TagsIcon />} text="Links" />
        </div>
    )
}

export default Sidebar