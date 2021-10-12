import * as React from 'react'

interface IBodyProps extends React.HTMLProps<HTMLDivElement> {}

const Body: React.FC<IBodyProps> = ({ children, ...otherProps }) => {
  const props = {
    ...otherProps,
  }

  return (
    <div className={'body-container'} {...props}>
      {children}
    </div>
  )
}

export default Body
