import React from 'react'

const SignUp = () => {
  return (
    <div>
   
    <div className="flex flex-col mt-16 mx-auto h-[200px] max-w-2/4 bg-black p-6 justify-center gap-4">
      <input type="email" name="email" id="" placeholder='Enter Email' />
      <input type="password" name="pass" id="" placeholder='Enter Pass' />
      <button className='px-4 py-1 cursor-pointer hover:bg-amber-500 text-gray-900 bg-amber-400 rounded-md'>Sign Up</button>

    </div>
  </div>
  )
}

export default SignUp