import * as React from 'react'
import Box from '../../components/box'
import Header from '../../components/header'
import useLanguage from '../../hooks/useLanguage'

interface IScheduleProps {}

const Schedule: React.FC<IScheduleProps> = (): JSX.Element => {
  const { t } = useLanguage()

  return (
    <Box className={'schedule-page-container'}>
      <Header title={t('SCHEDULE')} />
    </Box>
  )
}

export default Schedule
