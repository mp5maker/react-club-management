import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

const prepareDateWithTime = ({
  date,
  time,
}: {
  date: string
  time: string
}) => {
  const setHour = setHours(new Date(Number(date)), Number(time.substring(0, 2)))
  const setMinute = setMinutes(setHour, Number(time.substring(3)))
  return setMinute
}

export default prepareDateWithTime
