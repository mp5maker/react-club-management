import * as React from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import useLanguage from '../../hooks/useLanguage'
import Box from '../box'
import './calendar.scss'

type TCalendarProps = Partial<React.ComponentProps<typeof ReactCalendar>> & {}

const Calendar: React.FC<TCalendarProps> = ({ ...otherProps }: any): JSX.Element => {
  const { i18n } = useLanguage()

  const props = {
    locale: i18n.languages,
    ...otherProps,
  }

  return (
    <Box className={'calendar-container'}>
      <ReactCalendar {...props} />
    </Box>
  )
}

export default Calendar
