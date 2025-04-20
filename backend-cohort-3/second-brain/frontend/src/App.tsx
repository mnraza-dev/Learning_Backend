import React from 'react'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'

const App: React.FC = () => {
  return (
    <div className='flex  gap-4 justify-center items-center'>

      <Button size='sm' variant="primary" startIcon={<PlusIcon size='sm' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Button 1"} /> 
      <Button size='md' variant="primary" startIcon={<PlusIcon size='md' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Button 1"} /> 
      <Button size='lg' variant="primary" startIcon={<PlusIcon size='lg' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Button 1"} endIcon={<ShareIcon size='lg' />} />

    </div>
  )
}

export default App