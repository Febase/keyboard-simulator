import styled from '@emotion/styled'
import { useState } from 'react'
import { buttonStyle } from './styles'
import { ReactComponent as PlayIcon } from '../../res/play.svg'

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
  ${buttonStyle}
  margin-top: 0.5rem;
`
