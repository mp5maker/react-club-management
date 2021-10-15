import * as React from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Box from '../box'
import './calendar.scss'

type TCalendarProps = Partial<React.ComponentProps<typeof ReactCalendar>> & {}

const Calendar: React.FC<TCalendarProps> = ({ ...otherProps }): JSX.Element => {
  const props = {
    ...otherProps,
  }

  return (
    <Box className={'calendar-container'}>
      <ReactCalendar {...props} />
    </Box>
  )
}

export default Calendar
