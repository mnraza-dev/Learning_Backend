import React from 'react'
import { TextInput } from '@repo/ui/text-input'
import { Button } from '@repo/ui/button'

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',

      }}>
        <TextInput placeholder="Enter Email" />
        <Button appName="web" className='' children="Join Room" />
      </div>

    </div>
  )
}

export default Home