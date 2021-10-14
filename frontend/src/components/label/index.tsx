import * as React from 'react'

interface ILabelProps extends Partial<React.HTMLProps<HTMLLabelElement>> {}

const Label: React.FC<ILabelProps> = ({ ...otherProps }): JSX.Element => {
  const props = {
    ...otherProps,
  }

  return <label {...props} />
}

export default Label
