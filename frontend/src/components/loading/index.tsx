import * as React from 'react'
import { TYPOGRAPHY_VARIANT } from '../../constants/settings'
import useLanguage from '../../hooks/useLanguage'
import CollaborationSVG, { ICollaborationSVG } from '../../svg/collaboration'
import Box from '../box'
import Typography from '../typography'

interface ILoading extends ICollaborationSVG {
  message?: string
}

const Loading: React.FC<ILoading> = ({ message }) => {
  const { t } = useLanguage()

  return (
    <Box className={'center padding-top-xl'}>
      <Box>
        <CollaborationSVG />
        <Box className={'center'}>
          <Typography className={'margin-none'} variant={TYPOGRAPHY_VARIANT.H3}>
            {message ? message : t('LOADING')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Loading
