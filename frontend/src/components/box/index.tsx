import * as React from 'react'
import { COLORS, BOX_VARIANT } from '../../constants/settings'

export interface IBoxProps extends Partial<React.HTMLProps<HTMLDivElement>> {
  color?: COLORS
  variant?: BOX_VARIANT
}

const Box: React.FC<IBoxProps> = ({
  color = COLORS.INHERIT,
  variant = BOX_VARIANT.CONTAINED,
  style,
  ...otherProps
}) => {
  const props = {
    ...otherProps,
    style: {
      ...(variant === BOX_VARIANT.OUTLINED
        ? {
            border: `1px solid ${color}`,
          }
        : {}),
      ...(variant === BOX_VARIANT.CONTAINED
        ? {
            backgroundColor: color,
          }
        : {}),
      ...(style ? { style } : {}),
    },
  }

  return <div {...props} />
}

export default Box
