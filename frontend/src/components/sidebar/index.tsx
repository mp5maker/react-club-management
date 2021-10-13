import { faClock, faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../constants/routes'
import {
  COLORS,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import useLanguage from '../../hooks/useLanguage'
import Box from '../box'
import Typography from '../typography'
import './sidbar.scss'

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (): JSX.Element => {
  const { t } = useLanguage()

  return (
    <>
      <Box className={'sidebar-container open'} color={COLORS.BACKGROUND_2}>
        <Box className="sidebar-header">
          <Typography
            variant={TYPOGRAPHY_VARIANT.H4}
            component={TYPOGRAPHY_COMPONENT.H2}
          >
            <FontAwesomeIcon icon={faCoffee} /> &nbsp;
            {t('WORK_SOBER')}
          </Typography>
        </Box>
        <Box className="sidebar-content">
          <Box className="sidebar-item">
            <NavLink to={routes.root.path} activeClassName="active" exact>
              <Box className="sidebar-icon">
                <FontAwesomeIcon icon={faUsers} />
                &nbsp;&nbsp;
              </Box>
              {t('MEMBERS')}
            </NavLink>
          </Box>
          <Box className="sidebar-item">
            <NavLink to={routes.schedule.path} activeClassName="active" exact>
              <Box className="sidebar-icon">
                <FontAwesomeIcon icon={faClock} />
                &nbsp;&nbsp;
              </Box>
              {t('SCHEDULE')}
            </NavLink>
          </Box>
        </Box>
        <Box className="sidebar-footer"></Box>
      </Box>
    </>
  )
}

export default Sidebar
