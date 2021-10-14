import * as React from 'react'
import {
  COLORS,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'

interface ITypographProps
  extends Partial<React.HTMLProps<HTMLParagraphElement>> {
  variant?: TYPOGRAPHY_VARIANT
  color?: COLORS
  component?: TYPOGRAPHY_COMPONENT
}

const Typography: React.FC<ITypographProps> = ({
  variant = TYPOGRAPHY_VARIANT.BODY,
  color = COLORS.TEXT_1,
  style,
  component = TYPOGRAPHY_COMPONENT.P,
  children,
  ...otherProps
}): JSX.Element => {
  const props = {
    style: {
      color,
      fontSize: variant,
      ...(style ? style : {}),
    },
    ...otherProps,
  }

  switch (component) {
    case TYPOGRAPHY_COMPONENT.H1:
      return <h1 {...props}>{children}</h1>
    case TYPOGRAPHY_COMPONENT.H2:
      return <h2 {...props}>{children}</h2>
    case TYPOGRAPHY_COMPONENT.H3:
      return <h3 {...props}>{children}</h3>
    case TYPOGRAPHY_COMPONENT.H4:
      return <h4 {...props}>{children}</h4>
    case TYPOGRAPHY_COMPONENT.H5:
      return <h5 {...props}>{children} </h5>
    case TYPOGRAPHY_COMPONENT.H6:
      return <h6 {...props}>{children}</h6>
    case TYPOGRAPHY_COMPONENT.CITE:
      return <cite {...props}>{children}</cite>
    case TYPOGRAPHY_COMPONENT.BLOCK_QUOTE:
      return <blockquote {...props}>{children}</blockquote>
    case TYPOGRAPHY_COMPONENT.P:
      return <p {...props}>{children}</p>
    case TYPOGRAPHY_COMPONENT.SMALL:
      return <small {...props}>{children}</small>
    default:
      return <p {...props}>{children}</p>
  }
}

export default Typography
