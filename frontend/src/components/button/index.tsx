import * as React from 'react'
import { BUTTON_VARIANT, COLORS } from '../../constants/settings'
import './button.scss'

interface IButtonProps extends Partial<React.HTMLProps<HTMLButtonElement>> {
  color?: COLORS
  variant?: BUTTON_VARIANT
}

const Button: React.FC<IButtonProps> = ({
  color = COLORS.PRIMARY,
  variant = BUTTON_VARIANT.OUTLINED,
  style,
  ...otherProps
}: any): JSX.Element => {

  const props = {
    style: {
      ...(variant === BUTTON_VARIANT.OUTLINED ? {
        backgroundColor: 'transparent',
        border: `1px solid ${color}`,
        color
      }: {}),
      ...(variant === BUTTON_VARIANT.CONTAINED ? {
        backgroundColor: color,
        border: `1px solid ${color}`,
        color: `var(--text1)`
      }: {}),
      ...(style ? style: {})
    },
    ...otherProps
  }

  return (
    <button {...props} />
  )
}

export default Button