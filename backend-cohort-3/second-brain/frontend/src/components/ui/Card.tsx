import React from 'react'
import ShareIcon from '../../icons/ShareIcon'
import Tag from './Tag'

const Card: React.FC = () => {
    return (
        <div className='bg-white rounded-xl  border-gray-100 p-6 max-w-72 w-full drop-shadow-md hover:drop-shadow-lg hover:scale-100 cursor-pointer hover:duration-300 hover:transition-all hover:ease-in-out'>
            {/* Header */}
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                    <ShareIcon size='md' />
                    <p className='text-gray-600 text-sm'>Project Ideas</p>
                </div>
                <div className="flex items-center gap-2">
                    <ShareIcon size='md' />
                    <ShareIcon size='md' />

                </div>
            </div>
            {/* Body  */}
            <div className="flex">
                <div className="flex flex-col gap-2">
                    <h2 className='text-gray-600 text-xl font-bold'>Project Ideas</h2>
                    <ul className='list-disc px-4 flex flex-col gap-1'>
                        <li className='text-sm text-gray-800'>Build a personal knowledge base</li>

                        <li className='text-sm text-gray-800'>Create a habbit tracker</li>
                        <li className='text-sm text-gray-800'> Design a minimalist todo app </li>
                    </ul>
                </div>
            </div>
            {/* footer */}
            <div className="flex">
                <Tag title={['Design', 'UI/UX', 'Frontend'	] }/>
            </div>
        </div>
    )
}

export default Card