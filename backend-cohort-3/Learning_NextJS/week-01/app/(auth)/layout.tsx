import Link from 'next/link'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>  <nav className='px-8 flex h-[60px]  bg-black drop-shadow-2xl  justify-between items-center'>
            <div> <Link href={"/"}   > Home</Link></div>
            <div className='flex gap-2'>
                <Link className='text-sm text-gray-400 hover:text-gray-200' href={"/about"}   > About</Link>
                <Link className='text-sm text-gray-400 hover:text-gray-200' href={"/contact"}   > Contact</Link>
                <Link className='text-sm text-gray-400 hover:text-gray-200' href={"/signin"}   > Login</Link>
                <Link className='text-sm text-gray-400 hover:text-gray-200' href={"/signup"}   > SignUp</Link>
                <Link className='text-sm text-gray-400 hover:text-gray-200' href={"/user"}   > User</Link>
            </div>
        </nav>

            {children}
            <footer className='fixed p-6 max-w-full w-full flex justify-center mx-auto bottom-0  bg-black'>
                All Copyright Reserved
            </footer>
        </div>
    )
}

export default AuthLayout