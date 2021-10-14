import * as React from 'react'
import {
  COLORS,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import Box from '../box'
import Typography from '../typography'
import './field-error.scss'

interface IFieldErrorProps {
  message?: string | React.ReactNode
}

const FieldError: React.FC<IFieldErrorProps> = ({ message }): JSX.Element => {
  return (
    <Box className={'field-error-container'}>
      <Typography
        color={COLORS.ERROR}
        variant={TYPOGRAPHY_VARIANT.SUBTITLE_2}
        component={TYPOGRAPHY_COMPONENT.SMALL}
      >
        {message ? message : <></>}
      </Typography>
    </Box>
  )
}

export default FieldError
