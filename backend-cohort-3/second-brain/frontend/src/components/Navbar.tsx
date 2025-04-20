import PlusIcon from '../icons/PlusIcon'
import ShareIcon from '../icons/ShareIcon'
import Button from './ui/Button'

const Navbar = ({ setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className='fixed w-full z-20 flex p-4 justify-between items-center backdrop-blur-md bg-white/10 border-b border-white/20'>
            <h1 className='text-2xl text-[#7e5da6] font-bold ml-4'>Second Brain</h1>
            <div className="flex gap-2">
                <Button
                    size='md'
                    variant="secondary"
                    startIcon={<ShareIcon size='md' />}
                    onClick={() => console.log("Share Brain clicked")}
                    text={"Share Brain"}
                />
                <Button
                    size='md'
                    variant="primary"
                    startIcon={<PlusIcon size='md' />}
                    onClick={() => setModalOpen(true)}
                    text={"Add Content"}
                />
            </div>
        </div>
    )
}

export default Navbar
