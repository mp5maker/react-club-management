import * as React from 'react'
import Modal from '../..'
import { COLORS } from '../../../../constants/settings'
import useLanguage from '../../../../hooks/useLanguage'
import Box from '../../../box'
import Button from '../../../button'
import Typography from '../../../typography'

interface IDeleteModalProps {
  isVisible: boolean
  onClose: () => any | void
  onCancel: () => any | void
  onConfirm: () => any | void
  deleteText: string
  title: string
}

const DeleteModal: React.FC<IDeleteModalProps> = ({
  isVisible,
  onClose,
  onConfirm,
  onCancel,
  deleteText,
  title,
}): JSX.Element => {
  const { t } = useLanguage()

  return (
    <Modal
      title={title}
      isVisible={isVisible}
      onClose={onClose}
      footer={
        <Box className={'grid-two'} style={{ rowGap: '20px' }}>
          <Button
            color={COLORS.SUCCESS}
            onClick={onConfirm}
            aria-label={'Confirms Deletion'}
          >
            <Typography className={'margin-none'}>{t('CONFIRM')}</Typography>
          </Button>
          <Button
            color={COLORS.ERROR}
            onClick={onCancel}
            aria-label={'Cancel Deletion'}
          >
            <Typography className={'margin-none'}>{t('CANCEL')}</Typography>
          </Button>
        </Box>
      }
    >
      <Typography className={'center'}>{t('ARE_YOU_SURE')}</Typography>
      <Typography className={'center'}>
        {t('YOU_WANT_TO_REMOVE')} {deleteText} ?
      </Typography>
    </Modal>
  )
}

export default DeleteModal
