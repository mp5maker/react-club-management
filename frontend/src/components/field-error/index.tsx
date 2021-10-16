import * as React from 'react'
import {
  COLORS,
  ERROR_ALIGNMENT,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import Box from '../box'
import Typography from '../typography'
import './field-error.scss'

interface IFieldErrorProps {
  message?: string | React.ReactNode
  errorAlignment?: ERROR_ALIGNMENT
}

const FieldError: React.FC<IFieldErrorProps> = ({
  message,
  errorAlignment = ERROR_ALIGNMENT.LEFT,
}: any): JSX.Element => {
  return (
    <Box className={`field-error-container ${errorAlignment}`}>
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
