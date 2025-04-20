import React, { useState } from 'react'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'
import Card from './components/ui/Card'
import Navbar from './components/Navbar'
import Modal from './components/ui/Modal'

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <>
      <Navbar setModalOpen={setModalOpen} />
      <Modal open={modalOpen} onClose={() => { setModalOpen(false) }} />
      <div className='flex p-8 items-center'>
        <div className="flex gap-4">
          {/* <Card type={"twitter"} link="https://twitter.com/ahuja_priyank/status/1802681770241929267?ref_src=twsrc%5Etfw" title="First Tweet" /> */}
          <Card type={"twitter"} link="https://twitter.com/mnraza1907/status/1798661139943084393?ref_src=twsrc%5Etfw" title='My First Tweet' />
          <Card type={"youtube"} link="https://www.youtube.com/embed/Eg1DeXnS0MU?si=usaaTziQI414w0uq" title='First Video' />

        </div>
      </div>
    </>
  )
}

export default App