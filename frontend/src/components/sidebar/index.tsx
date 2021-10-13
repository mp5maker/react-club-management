import * as React from 'react'
import { COLORS } from '../../constants/settings'
import Box from '../box'
import './sidbar.scss'

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (): JSX.Element => {
  return (
    <>
      <Box className={'sidebar-container open'} color={COLORS.BACKGROUND_2}>
        <Box className="sidebar-header">
        </Box>
        <Box className="sidebar-content">
          hello
        </Box>
        <Box className="sidebar-footer"></Box>
      </Box>
    </>
  )
}

export default Sidebar