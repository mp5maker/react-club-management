import * as React from 'react'
import { COLORS, BOX_VARIANT, BOX_COMPONENTS } from '../../constants/settings'

export interface IBoxProps extends Partial<React.HTMLProps<HTMLDivElement>> {
  color?: COLORS
  variant?: BOX_VARIANT
  component?: BOX_COMPONENTS
}

const Box: React.FC<IBoxProps> = ({
  color = COLORS.INHERIT,
  variant = BOX_VARIANT.CONTAINED,
  style,
  component = BOX_COMPONENTS.DIV,
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

  switch(component) {
    case BOX_COMPONENTS.DIV:
      return <div {...props} />
    case BOX_COMPONENTS.SPAN:
      return <span {...props} />
    case BOX_COMPONENTS.HEADER:
      return <header {...props} />
    case BOX_COMPONENTS.FOOTER:
      return <footer {...props} />
    case BOX_COMPONENTS.ASIDE:
      return <aside {...props} />
    case BOX_COMPONENTS.ARTICLE:
      return <article {...props} />
    case BOX_COMPONENTS.SECTION:
      return <section {...props} />
    default: return <div {...props} />
  }
}

export default Box
