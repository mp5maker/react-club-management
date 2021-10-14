import * as React from 'react'
import { IMAGE_AVATAR_SIZE } from '../../constants/settings'

interface IImageInterface extends React.HTMLProps<HTMLImageElement> {
  avatar?: IMAGE_AVATAR_SIZE
}

const Image: React.FC<IImageInterface> = ({
  avatar,
  style,
  alt = '',
  ...otherProps
}: any): JSX.Element => {
  const props = {
    style: {
      ...(avatar
        ? {
            height: avatar,
            width: avatar,
            borderRadius: avatar / 2,
          }
        : {}),
      ...(style ? style : {}),
    },
    ...otherProps,
  }

  return <img alt={alt} {...props} />
}

export default Image
