import React from 'react'
import { TextInput } from '@repo/ui/text-input'
import { Button } from '@repo/ui/button'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  return (
      <div className=' flex flex-col gap-2'>
        <TextInput placeholder="Enter Email" />
        <Button  appName="web" className='' children="Join Room" />
      </div>
  )
}
export default Home