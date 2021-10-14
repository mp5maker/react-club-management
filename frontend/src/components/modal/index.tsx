import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { COLORS, TYPOGRAPHY_COMPONENT } from '../../constants/settings'
import Box from '../box'
import Button from '../button'
import Typography from '../typography'
import './modal.scss'

interface IModalProps {
  isVisible: boolean
  title: string
  onClose: () => any | void
}

const Modal: React.FC<IModalProps> = ({
  isVisible,
  title,
  onClose,
}): JSX.Element => {
  return (
    <Box
      className={`modal-container ${isVisible ? 'open zindex-modal' : 'close'}`}
      style={{ backgroundColor: 'var(--modalBackground)' }}
    >
      <Box className="modal-main" color={COLORS.BACKGROUND_2}>
        <Box className="modal-header space-between">
          <Box>
            <Typography component={TYPOGRAPHY_COMPONENT.H4}>{title}</Typography>
          </Box>
          <Box>
            <Button onClick={onClose} className={'circle-medium center'}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Box>
        </Box>
        <Box className="modal-content"></Box>
        <Box className="modal-footer"></Box>
      </Box>
    </Box>
  )
}

export default Modal
