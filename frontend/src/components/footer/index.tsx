import * as React from 'react'
import useLanguage from '../../hooks/useLanguage'
import Box from '../box'
import './footer.scss'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  const { t } = useLanguage()

  return (
    <Box className={'footer-container'}>
      <Box>
        &copy; {new Date().getFullYear()} {t('ALL_RIGHTS_RESERVED')},
        worksober.com
      </Box>
    </Box>
  )
}

export default Footer
