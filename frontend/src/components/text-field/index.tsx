import * as React from 'react'
import {
  COLORS,
  ERROR_ALIGNMENT,
  TYPOGRAPHY_COMPONENT,
} from '../../constants/settings'
import Box from '../box'
import FieldError from '../field-error'
import Typography from '../typography'
import './text-field.scss'

export interface ITextFieldProps
  extends Partial<React.HTMLProps<HTMLInputElement>> {
  error?: string
  label?: any
  errorAlignment?: ERROR_ALIGNMENT
}

const TextField: React.FC<ITextFieldProps> = ({
  id,
  error,
  label,
  required,
  errorAlignment,
  ...otherProps
}): JSX.Element => {
  const props = {
    required,
    id,
    ...otherProps,
  }

  const labelProps = {
    ...(id
      ? {
          htmlFor: id,
        }
      : {}),
  }

  const errorProps = {
    ...(errorAlignment ? {errorAlignment} : {}),
  }

  return (
    <Box className={'text-field-container'}>
      <label {...labelProps}>
        {label}{' '}
        {required ? (
          <Typography
            color={COLORS.ERROR}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            *
          </Typography>
        ) : (
          <></>
        )}
      </label>
      <input {...props} />
      <FieldError message={error} {...errorProps} />
    </Box>
  )
}

export default TextField
