import * as React from 'react'
import Box, { IBoxProps } from '../box'
import Footer from '../footer'

interface IBodyProps extends IBoxProps {}

const Body: React.FC<IBodyProps> = ({ children, ...otherProps }) => {
  const props = {
    ...otherProps,
  }

  return (
    <Box className={'body-container'} {...props}>
      {children}
      <Footer />
    </Box>
  )
}

export default Body
