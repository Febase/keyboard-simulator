import React from 'react'
import './App.css'
import styled from '@emotion/styled'
import { ThreeFiber } from './components/ThreeFiber/ThreeFiber'

function App() {
  return (
    <AppWrapper className="App">
      <Msg />
      <ThreeFiber />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  padding: 10vh;
`

const Msg = () => <p>-Febase Team 1 -</p>
