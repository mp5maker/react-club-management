import * as React from 'react'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import Calendar from '../../components/calendar'
import Header from '../../components/header'
import { FORM_MODE } from '../../constants/settings'
import SchedulesForm from '../../forms/schedule'
import useLanguage from '../../hooks/useLanguage'

interface IScheduleProps {}

const Schedule: React.FC<IScheduleProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const [value, setValue] = React.useState(new Date())
  console.log(value)

  return (
    <Box className={'schedule-page-container'}>
      <Box>
        <Header title={t('SCHEDULE')} />
        <Box style={{ display: 'flex' }}>
          <Box></Box>
          <Box className={'padding-m margin-left-auto'}>
            <Calendar onChange={setValue} value={value} />
            <Box className={'margin-top-m'}>
              <SchedulesForm
                mode={FORM_MODE.ADD}
                buttonLabel={t('ADD')}
                api={apiHelper.schedules.create}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Schedule
