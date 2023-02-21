import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { genCustomKeyEventFromCharacter } from './components/Keyboard/Key'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

document.addEventListener('keydown', (evt) => {
  const event = genCustomKeyEventFromCharacter(evt.key)
  document.dispatchEvent(event)
})
