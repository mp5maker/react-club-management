import * as React from 'react'
import { COLORS, TYPOGRAPHY_COMPONENT } from '../../constants/settings'
import Box from '../box'
import FieldError from '../field-error'
import Typography from '../typography'
import './text-field.scss'

interface ITextFieldProps extends Partial<React.HTMLProps<HTMLInputElement>> {
  error?: string
  label?: string
}

const TextField: React.FC<ITextFieldProps> = ({
  id,
  error,
  label,
  required,
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
      <FieldError message={error} />
    </Box>
  )
}

export default TextField
