import * as React from 'react'
import Box, { IBoxProps } from '../box'

interface IBodyProps extends IBoxProps {}

const Body: React.FC<IBodyProps> = ({ children, ...otherProps }) => {
  const props = {
    ...otherProps,
  }

  return (
    <Box className={'body-container'} {...props}>
      {children}
    </Box>
  )
}

export default Body
