import * as React from 'react'
import { FAB_LOCATION } from '../../constants/settings'
import Button, { IButtonProps } from '../button'
import './fab.scss'

interface IFabProps extends IButtonProps {
  location: FAB_LOCATION
}

const Fab: React.FC<IFabProps> = ({
  location = FAB_LOCATION.BOTTOM_CENTER,
  className,
  ...otherProps
}) => {
  const props = {
    ...otherProps,
  }

  return (
    <Button
      className={`fab-container ${location} ${className ? className : ''}`}
      {...props}
    />
  )
}

export default Fab
