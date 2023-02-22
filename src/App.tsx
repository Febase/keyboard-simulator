import './App.css'
import styled from '@emotion/styled'
import { ThreeFiber } from './components/ThreeFiber/ThreeFiber'
import Panel from './components/Panel'

function App() {
  return (
    <AppWrapper className="App">
      <Msg />
      <ThreeFiber />
      <Panel />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  padding: 10vh;
`

const Msg = () => <p>-Febase Team 1 -</p>
