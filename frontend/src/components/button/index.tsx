import * as React from 'react'
import { BUTTON_VARIANT, COLORS } from '../../constants/settings'
import useBusy from '../../hooks/useBusy'
import './button.scss'

export interface IButtonProps extends Partial<React.HTMLProps<HTMLButtonElement>> {
  color?: COLORS
  variant?: BUTTON_VARIANT
  fullWidth?: boolean
}

const Button: React.FC<IButtonProps> = ({
  color = COLORS.PRIMARY,
  variant = BUTTON_VARIANT.OUTLINED,
  fullWidth,
  style,
  disabled,
  ...otherProps
}: any): JSX.Element => {
  const { busy } = useBusy()

  const props = {
    disabled: disabled || busy,
    style: {
      ...(variant === BUTTON_VARIANT.OUTLINED
        ? {
            backgroundColor: 'transparent',
            border: `1px solid ${color}`,
            color,
          }
        : {}),
      ...(variant === BUTTON_VARIANT.CONTAINED
        ? {
            backgroundColor: color,
            border: `1px solid ${color}`,
            color: `var(--text1)`,
          }
        : {}),
      ...(fullWidth ? { width: '100%' } : {}),
      ...(style ? style : {}),
    },
    ...otherProps,
  }

  return <button {...props} />
}

export default Button
