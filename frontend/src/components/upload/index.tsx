import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Box from '../box'
import TextField, { ITextFieldProps } from '../text-field'
import './upload.scss'

interface IUploadProps extends ITextFieldProps {
  id: string
}

const Upload: React.FC<IUploadProps> = ({ id, ...otherProps }): JSX.Element => {
  const props = {
    ...otherProps,
  }

  return (
    <TextField
      id={id}
      accept={'image/*'}
      type={'file'}
      capture={'environment'}
      style={{ display: 'none' }}
      label={
        <Box className={'center'}>
          <Box className={'circle-flex-large border-secondary center'}>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </Box>
        </Box>
      }
      {...props}
    />
  )
}

export default Upload
