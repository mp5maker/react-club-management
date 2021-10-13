import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import {
  BOX_COMPONENTS,
  SIDEBAR,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import useSidebar from '../../hooks/useSidebar'
import Box from '../box'
import Button from '../button'
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
  const { sidebar, changeSidebar } = useSidebar()

  const openSidebar = () => changeSidebar(SIDEBAR.OPEN)

  return (
    <Box component={BOX_COMPONENTS.HEADER} className={'header-container'}>
      {left ? (
        <Box className={'header-left-content'}>{left}</Box>
      ) : (
        <Box className={'header-left-content'}>
          <Box className={'space-between'}>
            {sidebar === SIDEBAR.CLOSE ? (
              <Button
                onClick={openSidebar}
                className={'selective-visible'}
                style={{ marginRight: 12 }}
              >
                <FontAwesomeIcon icon={faBars} />
              </Button>
            ) : (
              <></>
            )}
            <Typography
              component={TYPOGRAPHY_COMPONENT.H2}
              variant={TYPOGRAPHY_VARIANT.H2}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      )}
      {right ? <Box className={'header-right-content'}>{right}</Box> : <></>}
    </Box>
  )
}

export default Header
