import format from 'date-fns/format'
import get from 'lodash/get'
import * as React from 'react'
import { v4 } from 'uuid'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import Calendar from '../../components/calendar'
import Card from '../../components/card'
import ScheduleCard from '../../components/card/common/schedule'
import Header from '../../components/header'
import {
  CARD_SIZE,
  DATE_TIME_FORMAT,
  FORM_MODE,
} from '../../constants/settings'
import SchedulesForm from '../../forms/schedule'
import useChosenDate from '../../hooks/useChosenDate'
import useLanguage from '../../hooks/useLanguage'
import useSchedules from '../../hooks/useSchedules'

interface IScheduleProps {}

const generatedID = v4()

const Schedule: React.FC<IScheduleProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const { schedules } = useSchedules()
  const { chosenDate, changeChosenDate } = useChosenDate()
  const dateParsed = Number(chosenDate)

  const handleChosenDate = (value: Date) => {
    changeChosenDate(
      String(Date.parse(format(value, DATE_TIME_FORMAT.DATE_ONLY)))
    )
  }

  const dateWiseSchedules = [...schedules]
    .filter((schedule) => {
      const date = get(schedule, 'date', '')
      return date === String(dateParsed)
    })
    .sort((a, b) => {
      return Number(a) - Number(b)
    })

  return (
    <Box className={'schedule-page-container'}>
      <Box>
        <Header title={t('SCHEDULE')} />
        <Box style={{ display: 'flex' }}>
          <Box className={'padding-left-m padding-right-m'}>
            {dateWiseSchedules ? (
              <>
                {dateWiseSchedules.map((schedule, index) => {
                  return (
                    <Card
                      key={`${generatedID}-${index}`}
                      size={CARD_SIZE.SMALL}
                    >
                      <ScheduleCard item={schedule} />
                    </Card>
                  )
                })}
              </>
            ) : (
              <></>
            )}
          </Box>
          <Box className={'padding-m margin-left-auto'}>
            <Calendar
              onChange={handleChosenDate}
              value={new Date(dateParsed)}
            />
            <Box className={'margin-top-m'}>
              <SchedulesForm
                mode={FORM_MODE.ADD}
                buttonLabel={t('ADD')}
                api={apiHelper.schedules.create}
                setValue={{
                  date: String(dateParsed),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Schedule
