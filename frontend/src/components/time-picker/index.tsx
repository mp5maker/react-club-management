import * as React from 'react'
import 'react-clock/dist/Clock.css'
import ReactTimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import Box from '../box'
import './time-picker.scss'

type TTimePickerProps = React.ComponentProps<typeof ReactTimePicker> & {}

const TimePicker: React.FC<TTimePickerProps> = ({
  ...otherProps
}): JSX.Element => {
  const props = {
    ...otherProps,
  }

  return (
    <Box className={'time-picker-contaienr'}>
      <ReactTimePicker {...props} />
    </Box>
  )
}

export default TimePicker
