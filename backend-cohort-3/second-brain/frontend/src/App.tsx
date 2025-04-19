import React from 'react'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'

const App: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>

      <Button size='sm' variant="primary" startIcon={<PlusIcon size='sm' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Button 1"} /> 
      <Button size='md' variant="primary" startIcon={<PlusIcon size='md' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Button 1"} /> 
      <Button size='lg' variant="primary" startIcon={<PlusIcon size='lg' />} onClick={() => {
        console.log("Button 1 clicked")
      }} text={"Button 1"} />

    </div>
  )
}

export default App