import * as React from 'react'
import { TYPOGRAPHY_VARIANT } from '../../constants/settings'
import useLanguage from '../../hooks/useLanguage'
import NoDataSVG, { INoDataSVGProps } from '../../svg/noData'
import Box from '../box'
import Typography from '../typography'

interface INoDataFound extends INoDataSVGProps {
  message?: string
}

const NoDataFound: React.FC<INoDataFound> = ({ message }) => {
  const { t } = useLanguage()

  return (
    <Box className={'center padding-top-xl'}>
      <Box>
        <NoDataSVG />
        <Box className={'center'}>
          <Typography className={'margin-none'} variant={TYPOGRAPHY_VARIANT.H3}>
            {message ? message : t('NO_DATA_FOUND')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default NoDataFound
