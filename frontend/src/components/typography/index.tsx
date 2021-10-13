import * as React from 'react'
import { COLORS, TYPOGRAPHY_VARIANT } from '../../constants/settings'

interface ITypographProps extends Partial<React.HTMLProps<HTMLParagraphElement>> {
  variant?: TYPOGRAPHY_VARIANT
  color?: COLORS
}

const Typography: React.FC<ITypographProps> = ({
  variant = TYPOGRAPHY_VARIANT.BODY,
  color = COLORS.TEXT_1
  ...otherProps
}): JSX.Element => {
  const props = {
    ...otherProps
  }

  return (
    <p {...props} />
  )
}

export default Typography