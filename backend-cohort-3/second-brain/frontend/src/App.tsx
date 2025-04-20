import React from 'react'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'
import Card from './components/ui/Card'

const App: React.FC = () => {
  return (
    <div className='flex p-8 flex-col   gap-4 justify-center items-center'>
     <div className="flex gap-2">
     <Button size='md' variant="secondary" startIcon={<ShareIcon size='md' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Share Brain"} />
      <Button size='md' variant="primary" startIcon={<PlusIcon size='md' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Add Content"} />
     </div>

      <Card />

    </div>
  )
}

export default App