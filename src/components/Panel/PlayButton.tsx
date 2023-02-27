import styled from '@emotion/styled'
import { useState } from 'react'
import { buttonStyle } from './styles'
import { ReactComponent as PlayIcon } from '../../res/play.svg'
import { ReactComponent as StopIcon } from '../../res/stop.svg'

interface IPlayButtonProps {
  isPlaying: boolean
  onClick: () => void
}

export default function PlayButton({ isPlaying, onClick }: IPlayButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Button
      role="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPlaying ? (
        <StopIcon onClick={onClick} />
      ) : (
        <PlayIcon fill={isHovered ? '#d65a31' : '#ffffff'} onClick={onClick} />
      )}
    </Button>
  )
}

const Button = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${buttonStyle}
  margin-top: 0.5rem;
`
