import { useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"
import { JSX } from "react"

const App = (): JSX.Element => {
  const networkCount = useRecoilValue<number>(networkAtom)
  const jobsCount = useRecoilValue<number>(jobsAtom)
  const notificationCount = useRecoilValue<number>(notificationAtom)
  
  const totalCount = useRecoilValue<number>(totalNotificationSelector)

  const [messageCount, setMessageCount] = useRecoilState<number>(messagingAtom)

  return (
    <div>
      <h1>Learn Recoil - {totalCount}</h1>
      <button>My Network {networkCount > 99 ? "99+" : networkCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notifications {notificationCount}</button>

      <button onClick={() => setMessageCount(messageCount + 1)}>
        Send Message
      </button>
    </div>
  )
}

export default App
