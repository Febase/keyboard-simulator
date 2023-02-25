import styled from '@emotion/styled'
import { ReactComponent as PlayIcon } from '../../res/play.svg'
import { useState } from 'react'

export default function PlayButton() {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PlayIcon fill={isHovered ? '#d65a31' : '#ffffff'} />
    </Button>
  )
}

const Button = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
