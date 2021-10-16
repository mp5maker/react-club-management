import React from 'react'
import Box from '../../components/box'
import Typography from '../../components/typography'
import {
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT
} from '../../constants/settings'
import useLanguage from '../../hooks/useLanguage'

interface INotFoundProps {}

const NotFound: React.FC<INotFoundProps> = () => {
  const { t } = useLanguage()

  return (
    <Box className={'not-found-page-container'} data-testid="not-found">
      <Box style={{ minHeight: 500 }} className={'center'}>
        <Box>
          <Box className={'center'}>
            <Typography
              component={TYPOGRAPHY_COMPONENT.H4}
              variant={TYPOGRAPHY_VARIANT.H4}
            >
              {t('404_PAGE_NOT_FOUND')}
            </Typography>
          </Box>
          <Box className={'center'}>
            <Typography>{t('PAGE_DO_NOT_EXIST')}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NotFound
