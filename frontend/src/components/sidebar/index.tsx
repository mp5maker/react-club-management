import {
  faClock,
  faLightbulb,
  faMoon,
  faSignOutAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../constants/routes'
import {
  BUTTON_VARIANT,
  COLORS,
  LANGUAGE,
  SIDEBAR,
  THEME,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import useLanguage from '../../hooks/useLanguage'
import useSidebar from '../../hooks/useSidebar'
import useTheme from '../../hooks/useTheme'
import Box from '../box'
import Button from '../button'
import Typography from '../typography'
import './sidbar.scss'

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (): JSX.Element => {
  const { t, language, changeLanguage } = useLanguage()
  const { theme, changeTheme } = useTheme()
  const { sidebar, changeSidebar } = useSidebar()

  const handleLanguage = (newLanguage: LANGUAGE) => changeLanguage(newLanguage)
  const handleTheme = (newTheme: THEME) => changeTheme(newTheme)
  const closeSidebar = () => changeSidebar(SIDEBAR.CLOSE)

  return (
    <>
      <Box
        className={`sidebar-container zindex-sidebar ${sidebar}`}
        color={COLORS.BACKGROUND_2}
      >
        <Box className="sidebar-header space-between">
          <Typography
            variant={TYPOGRAPHY_VARIANT.H4}
            component={TYPOGRAPHY_COMPONENT.H2}
          >
            {t('WORK_SOBER')}
          </Typography>
          <Button
            onClick={closeSidebar}
            className={'circle-small selective-visible'}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ transform: 'scale(-1)' }}
            />
          </Button>
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
        <Box className="sidebar-footer">
          <Box className="sidebar-item space-between">
            <Box>
              <Typography>{t('THEME')}</Typography>
            </Box>
            <Box className={'sidebar-item-option space-between'}>
              <Button
                onClick={() => handleTheme(THEME.LIGHT)}
                className={'sidebar-icon circle-medium'}
                variant={
                  theme === THEME.LIGHT
                    ? BUTTON_VARIANT.CONTAINED
                    : BUTTON_VARIANT.OUTLINED
                }
                color={theme === THEME.LIGHT ? COLORS.SECONDARY : COLORS.TEXT_1}
              >
                <FontAwesomeIcon icon={faLightbulb} />
              </Button>
              <Button
                onClick={() => handleTheme(THEME.DARK)}
                className={'sidebar-icon circle-medium'}
                variant={
                  theme === THEME.DARK
                    ? BUTTON_VARIANT.CONTAINED
                    : BUTTON_VARIANT.OUTLINED
                }
                color={theme === THEME.DARK ? COLORS.SECONDARY : COLORS.TEXT_1}
              >
                <FontAwesomeIcon icon={faMoon} />
              </Button>
            </Box>
          </Box>
          <Box className="sidebar-item space-between">
            <Box>
              <Typography>{t('LANGUAGE')}</Typography>
            </Box>
            <Box className={'sidebar-item-option space-between'}>
              <Button
                onClick={() => handleLanguage(LANGUAGE.ENGLISH)}
                className={'sidebar-icon circle-medium'}
                variant={
                  language === LANGUAGE.ENGLISH
                    ? BUTTON_VARIANT.CONTAINED
                    : BUTTON_VARIANT.OUTLINED
                }
                color={
                  language === LANGUAGE.ENGLISH
                    ? COLORS.SECONDARY
                    : COLORS.TEXT_1
                }
              >
                {t('ENGLISH').substring(0, 2)}
              </Button>
              <Button
                onClick={() => handleLanguage(LANGUAGE.LITHUANIAN)}
                className={'sidebar-icon circle-medium'}
                variant={
                  language === LANGUAGE.LITHUANIAN
                    ? BUTTON_VARIANT.CONTAINED
                    : BUTTON_VARIANT.OUTLINED
                }
                color={
                  language === LANGUAGE.LITHUANIAN
                    ? COLORS.SECONDARY
                    : COLORS.TEXT_1
                }
              >
                {t('LITHUANIAN').substring(0, 2)}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
