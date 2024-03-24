import { selectUser } from './selectors/user.selector'

function App(): JSX.Element {
  const user = selectUser()

  return (
    <div>
      <p>Hello, {user?.username}</p>
    </div>
  )
}

export default App
