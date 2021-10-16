import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { COLORS, TYPOGRAPHY_VARIANT } from '../../constants/settings'
import Box from '../box'
import Button from '../button'
import Typography from '../typography'
import './modal.scss'

interface IModalProps {
  isVisible: boolean
  title: string
  onClose: () => any | void
  footer?: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({
  isVisible,
  title,
  onClose,
  children,
  footer,
}): JSX.Element => {
  return (
    <Box
      style={{
        backgroundColor: 'var(--modalBackground)',
      }}
      className={`modal-container ${
        isVisible ? 'open zindex-modal' : 'close'
      }`}
    >
      <Box className="modal-main" color={COLORS.BACKGROUND_2}>
        <Box className="modal-header space-between">
          <Box>
            <Typography
              className={'margin-none'}
              variant={TYPOGRAPHY_VARIANT.H4}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={onClose}
              className={'circle-medium center'}
              aria-label={'Closes the modal'}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Box>
        </Box>
        <Box className="modal-content">{children}</Box>
        {footer ? <Box className="modal-footer">{footer}</Box> : <></>}
      </Box>
    </Box>
  )
}

export default Modal
