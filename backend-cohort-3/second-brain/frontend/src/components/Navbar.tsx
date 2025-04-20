import PlusIcon from '../icons/PlusIcon'
import ShareIcon from '../icons/ShareIcon'
import Button from './ui/Button'
const Navbar = () => {
    return (
        <div className='flex p-4 justify-end items-center'>

            <div className="flex gap-2">
                <Button size='md' variant="secondary" startIcon={<ShareIcon size='md' />} onClick={() => {
                    console.log("Button 1 clicked")
                }} text={"Share Brain"} />
                <Button size='md' variant="primary" startIcon={<PlusIcon size='md' />} onClick={() => {
                    console.log("Button 1 clicked")
                }} text={"Add Content"} />
            </div>   </div>
    )
}
export default Navbar