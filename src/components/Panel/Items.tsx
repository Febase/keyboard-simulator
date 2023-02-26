import React, { useState } from 'react'
import styled from '@emotion/styled'
import PlayButton from './PlayButton'

export default function Items() {
  return <Item />
}

function Item() {
  const [value, setValue] = useState<string>('')
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    const regex = /^[a-zA-Z0-9`~!@#$%^&*()_+\s]{0,80}?$/
    text.match(regex) && setValue(text)
  }

  return (
    <ItemContainer>
      <Editor
        value={value}
        placeholder="plz enter text"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <PlayButton />
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding: 0.5rem;
`

const Editor = styled.textarea`
  height: 1.5rem;
  border: none;
  outline: none;
  min-height: 5rem;
`
