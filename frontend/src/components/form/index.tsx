import * as React from 'react'
import './form.scss'

interface IFormProps extends Partial<React.HTMLProps<HTMLFormElement>> {
  fieldset?: boolean
  legend?: string
}

const Form: React.FC<IFormProps> = ({
  fieldset,
  children,
  legend,
  ...otherProps
}): JSX.Element => {
  const props = {
    ...otherProps,
  }

  if (fieldset) {
    return (
      <form {...props}>
        <fieldset>
          {legend ? <legend>{legend}</legend> : <></>}
          {children}
        </fieldset>
      </form>
    )
  }

  return <form {...props}>{children}</form>
}

export default Form
