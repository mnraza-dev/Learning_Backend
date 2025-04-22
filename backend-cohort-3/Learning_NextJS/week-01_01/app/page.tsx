"use client"
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'
export default function Home() {
  return <SessionProvider>
    <MainApp />
  </SessionProvider>
}
function MainApp() {
  const session = useSession()
  return (
    <div className='flex p-8 justify-center gap-4 ' >
      {session.status === "authenticated" && <button className='bg-green-800 hover:bg-green-900 p-2 rounded-md' onClick={() => signOut()}>Logout</button>}
      {session.status === "unauthenticated" && <button className='bg-blue-700 hover:bg-blue-800 p-2 rounded-md' onClick={() => signIn()}>Sign In</button>}
    </div>
  )
}