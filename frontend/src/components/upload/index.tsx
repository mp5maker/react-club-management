import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { IMAGE_AVATAR_SIZE } from '../../constants/settings'
import Box from '../box'
import Image from '../image'
import TextField, { ITextFieldProps } from '../text-field'
import './upload.scss'

interface IUploadProps extends ITextFieldProps {
  id: string
  src?: string
}

const Upload: React.FC<IUploadProps> = ({
  id,
  src,
  ...otherProps
}): JSX.Element => {
  const props = {
    ...otherProps,
  }

  return (
    <TextField
      id={id}
      accept={'image/*'}
      type={'file'}
      capture={'environment'}
      className={'d-none'}
      label={
        <>
          {src ? (
            <Box className={'center'}>
              <Image src={src} avatar={IMAGE_AVATAR_SIZE.MEDIUM} />
            </Box>
          ) : (
            <Box className={'center'}>
              <Box className={'circle-flex-large border-secondary center'}>
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Box>
            </Box>
          )}
        </>
      }
      {...props}
    />
  )
}

export default Upload
