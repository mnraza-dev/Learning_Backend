import { useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms"
import { JSX } from "react"

const App = (): JSX.Element => {
  const networkCount = useRecoilValue<number>(networkAtom)
  const jobsCount = useRecoilValue<number>(jobsAtom)
  const notificationCount = useRecoilValue<number>(notificationAtom)
  const messageCount = useRecoilValue<number>(messagingAtom)

  return (
    <div>
      <h1>Learn Recoil</h1>
      <button>My Network {networkCount > 99 ? "99+" : networkCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notifications {notificationCount}</button>
    </div>
  )
}

export default App
