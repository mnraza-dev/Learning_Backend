import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1 className='text-3xl text-center'>Sign Up Page</h1>
      <input type="email" name="email" id="" placeholder='Enter Email' />
      <input type="password" name="pass" id="" placeholder='Enter Pass' />
      <button className='px-4 py-1 text-gray-900 bg-amber-400 rounded-md'>Sign Up</button>
    

    </div>
  )
}

export default SignUp