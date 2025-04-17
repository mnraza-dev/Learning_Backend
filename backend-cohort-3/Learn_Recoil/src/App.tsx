import { useRecoilValue } from "recoil"
import { networkAtom } from "./atoms"
import { JSX } from "react"

const App = (): JSX.Element => {
  const networkCount = useRecoilValue<number>(networkAtom)

  return (
    <div>
      <h1>Learn Recoil</h1>
      <button>My Network {networkCount}</button>
    </div>
  )
}

export default App
