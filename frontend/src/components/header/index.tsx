import * as React from 'react'
import {
  BOX_COMPONENTS,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import Box from '../box'
import Typography from '../typography'
import './header.scss'

interface IHeaderProps {
  left?: React.ReactNode
  right?: React.ReactNode
  title?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({
  left,
  right,
  title = '',
}): JSX.Element => {
  return (
    <Box component={BOX_COMPONENTS.HEADER} className={'header-container'}>
      {left ? (
        <Box className={'header-left-content'}>{left}</Box>
      ) : (
        <Box className={'header-left-content'}>
          <Typography
            component={TYPOGRAPHY_COMPONENT.H2}
            variant={TYPOGRAPHY_VARIANT.H2}
          >
            {title}
          </Typography>
        </Box>
      )}
      {right ? <Box className={'header-right-content'}>{right}</Box> : <></>}
    </Box>
  )
}

export default Header
