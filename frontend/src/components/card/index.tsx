import * as React from 'react'
import { CARD_SIZE } from '../../constants/settings'
import Box from '../box'
import './card.scss'

interface ICardProps {
  overlay?: React.ReactNode
  size?: CARD_SIZE
}

const Card: React.FC<ICardProps> = ({
  overlay,
  size = CARD_SIZE.MEDIUM,
  children,
}): JSX.Element => {
  return (
    <Box className={`card-container ${size}`}>
      {children}
      {overlay ? <Box className={'card-overlay'}>{overlay}</Box> : <></>}
    </Box>
  )
}

export default Card
