import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import apiHelper from '../api/apiHelper'

const useSchedules = () => {
  const [schedules, setSchedules] = React.useState<Array<ISchedules>>([])

  const getAllSchedules = React.useCallback(() => {
    const onSuccessSchedules = (response: AxiosResponse) => {
      const data = get(response, 'data', []) as Array<ISchedules>
      setSchedules(data)
    }
    const onError = (error: AxiosError) => console.debug(error)
    apiHelper.schedules.getAll().then(onSuccessSchedules).catch(onError)
  }, [])

  React.useEffect(() => {
    getAllSchedules()
  }, [getAllSchedules])

  return { schedules, getAllSchedules }
}

export default useSchedules
