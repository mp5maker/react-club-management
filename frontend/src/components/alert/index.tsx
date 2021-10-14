import get from 'lodash/get'
import * as React from 'react'
import { COLORS } from '../../constants/settings'
import useAlert from '../../hooks/useAlert'
import Box from '../box'
import './alert.scss'

interface IAlertProps {}

const Alert: React.FC<IAlertProps> = (): JSX.Element => {
  const timeout = React.useRef<ReturnType<typeof setTimeout>>()
  const { alert, setAlert } = useAlert()
  const color = get(alert, 'color', COLORS.PRIMARY)
  const show = get(alert, 'show', false)
  const message = get(alert, 'message', '')
  const duration = get(alert, 'duration', 3000)

  React.useEffect(() => {
    if (show) {
      if (timeout.current) clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        setAlert({
          color: COLORS.ERROR,
          show: false,
          message: '',
        })
      }, duration)
    }
  }, [show, duration, setAlert])

  return (
    <Box
      className={`alert-container center zindex-alert ${show ? 'open' : ''}`}
      style={{ backgroundColor: color }}
    >
      {message}
    </Box>
  )
}

export default Alert
