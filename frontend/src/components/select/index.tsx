import get from 'lodash/get'
import * as React from 'react'
import { v4 } from 'uuid'
import { COLORS, TYPOGRAPHY_COMPONENT } from '../../constants/settings'
import Box from '../box'
import FieldError from '../field-error'
import Typography from '../typography'
import './select.scss'

interface ISelectProps extends Partial<React.HTMLProps<HTMLSelectElement>> {
  options: Array<{ label: string; value: string | number }>
  children?: React.ReactNode
  error?: string
}

const generatedID = v4()

const Select: React.FC<ISelectProps> = ({
  id,
  error,
  label,
  required,
  options,
  placeholder,
  ...otherProps
}) => {
  const props = {
    placeholder,
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
    <Box className={'select-container'}>
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
      <select {...props}>
        {placeholder ? (
          <option key={`${generatedID}-default`}>{placeholder}</option>
        ) : (
          <></>
        )}
        {options.map((item, index) => {
          const itemLabel = get(item, 'label', '')
          const itemValue = get(item, 'value', '')
          return (
            <option value={itemValue} key={`${generatedID}-${index}`}>
              {itemLabel}
            </option>
          )
        })}
      </select>
      <FieldError message={error} />
    </Box>
  )
}

export default Select
