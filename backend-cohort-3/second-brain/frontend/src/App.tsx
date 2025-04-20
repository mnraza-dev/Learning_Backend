import React, { useState } from 'react'
import Card from './components/ui/Card'
import Navbar from './components/Navbar'
import Modal from './components/ui/Modal'
import Sidebar from './components/Sidebar'
const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Navbar setModalOpen={setModalOpen} />
      <Modal open={modalOpen} onClose={() => { setModalOpen(false) }} />
      <div>

        <Sidebar />

        <div className=' ml-48	min-h-screen bg-gray-100  p-8 py-18'>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* <Card type={"twitter"} link="https://twitter.com/ahuja_priyank/status/1802681770241929267?ref_src=twsrc%5Etfw" title="First Tweet" /> */}
            <Card type={"youtube"} link="https://www.youtube.com/embed/Eg1DeXnS0MU?si=usaaTziQI414w0uq" title='First Video' />
            <Card type={"twitter"} link="https://twitter.com/mnraza1907/status/1798661139943084393?ref_src=twsrc%5Etfw" title='My First Tweet' />
            <Card type={"youtube"} link="https://www.youtube.com/embed/Eg1DeXnS0MU?si=usaaTziQI414w0uq" title='First Video' />
          </div>
        </div>
      </div>
    </>
  )
}
export default App