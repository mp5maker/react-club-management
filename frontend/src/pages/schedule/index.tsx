import format from 'date-fns/format'
import get from 'lodash/get'
import * as React from 'react'
import { v4 } from 'uuid'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import DeleteButton from '../../components/button/common/delete'
import EditButton from '../../components/button/common/edit'
import Calendar from '../../components/calendar'
import Card from '../../components/card'
import ScheduleCard from '../../components/card/common/schedule'
import Header from '../../components/header'
import DeleteModal from '../../components/modal/common/delete'
import {
  CARD_SIZE,
  DATE_TIME_FORMAT,
  FORM_MODE,
} from '../../constants/settings'
import SchedulesForm from '../../forms/schedule'
import useChosenDate from '../../hooks/useChosenDate'
import useDeleteModal from '../../hooks/useDeleteModal'
import useLanguage from '../../hooks/useLanguage'
import useSchedules from '../../hooks/useSchedules'
import './schedule.scss'

interface IScheduleProps {}

const generatedID = v4()

const Schedule: React.FC<IScheduleProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const { schedules, getAllSchedules } = useSchedules()
  const { chosenDate, changeChosenDate } = useChosenDate()
  const {
    deleteObj,
    openDeleteConfirmation,
    closeDeleteConfirmation,
    removeItem,
  } = useDeleteModal<ISchedules>({
    afterRemoveSuccess: getAllSchedules,
    successMessage: t('SCHEDULE_SUCCESSFULLY_DELETED'),
    errorMessage: t('SCHEDULE_CANNOT_BE_DELETED'),
    deleteApi: apiHelper.schedules.remove,
  })
  const dateParsed = Number(chosenDate)

  const afterScheduleCreation = () => getAllSchedules()

  const editSchedule = () => {}
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

  const DeleteModalContent = (
    <DeleteModal
      title={t('REMOVE_SCHEDULE')}
      isVisible={deleteObj ? true : false}
      onClose={closeDeleteConfirmation}
      onConfirm={removeItem}
      onCancel={closeDeleteConfirmation}
      deleteText={get(deleteObj, 'title', '')}
    />
  )

  const HeaderContent = <Header title={t('SCHEDULE')} />

  const ScheduleListContent = (
    <Box className={'card-collection-container'}>
      {dateWiseSchedules ? (
        <>
          {dateWiseSchedules.map((schedule, index) => {
            return (
              <Card
                key={`${generatedID}-${index}`}
                size={CARD_SIZE.SMALL}
                overlay={
                  <Box
                    className={'center margin-top-m'}
                    style={{ height: '100%', alignItems: 'flex-end' }}
                  >
                    <Box className={'space-between'}>
                      <EditButton row={schedule} onClick={editSchedule} />
                      <DeleteButton
                        row={schedule}
                        onClick={openDeleteConfirmation}
                      />
                    </Box>
                  </Box>
                }
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
  )

  const CalendarContent = (
    <Calendar onChange={handleChosenDate} value={new Date(dateParsed)} />
  )

  const ScheduleFormContent = (
    <SchedulesForm
      mode={FORM_MODE.ADD}
      buttonLabel={t('ADD')}
      afterSuccess={afterScheduleCreation}
      api={apiHelper.schedules.create}
      setValue={{
        date: String(dateParsed),
      }}
    />
  )

  return (
    <>
      {DeleteModalContent}
      <Box className={'schedule-page-container'}>
        <Box>
          <Box style={{ display: 'flex' }} className={'schedule-splitter'}>
            <Box className={'padding-left-m padding-right-m'}>
              {HeaderContent}
              {ScheduleListContent}
            </Box>
            <Box className={'padding-m margin-left-auto'}>
              {CalendarContent}
              <Box className={'margin-top-m'}>{ScheduleFormContent}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Schedule
