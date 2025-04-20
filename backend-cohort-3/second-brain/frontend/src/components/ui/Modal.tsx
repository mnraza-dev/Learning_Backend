import { useState } from "react"
import Crossicon from "../../icons/Crossicon"
import Input from "./Input"
import Button from "./Button"


const Modal = ({ open, onClose }) => {
  const [modelOpen, setModelOpen] = useState(false)
  return (
    <>
      {
        open && (
          <div className="h-screen w-screen z-30 fixed left-0 top-0 inset-0 bg-black opacity-90 backdrop-blur-3xl flex justify-center items-center">
            <div className="bg-white p-2 flex flex-col w-[400px] rounded-lg">
              <div className="flex justify-end">
                <button
                  className="cursor-pointer hover:text-red-400 text-gray-500 p-0 rounded-full"
                  onClick={onClose}>
                  <Crossicon size='lg' />
                </button>
              </div>
              <h1>
                Hi There.
              </h1>
              <div className="flex flex-col justify-center items-center">
                <Input type={"text"} placeholder={"Title"} />
                <Input type={"text"} placeholder={"Link"} />
                <Button size="md" variant="primary" text="Submit" onClick={() => { }} />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Modal