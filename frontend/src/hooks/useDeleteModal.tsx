import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { COLORS } from '../constants/settings'
import useAlert from './useAlert'

type TUseDeleteModal = {
  deleteApi: ({ id }: any) => Promise<AxiosResponse<unknown, any>>
  afterRemoveSuccess: () => any | void
  successMessage: string
  errorMessage: string
}

const useDeleteModal = <T,>({
  deleteApi,
  afterRemoveSuccess,
  successMessage,
  errorMessage,
}: TUseDeleteModal) => {
  const [deleteObj, setDeleteObj] = React.useState<T | null>(null)
  const { setAlert } = useAlert()

  const closeDeleteConfirmation = React.useCallback(
    () => setDeleteObj(null),
    []
  )

  const openDeleteConfirmation = React.useCallback(({ row }: { row: T }) => {
    setDeleteObj(row)
  }, [])

  const removeItem = () => {
    const onSuccess = (response: AxiosResponse) => {
      console.debug(response)
      setAlert({
        message: successMessage,
        color: COLORS.SUCCESS,
        show: true,
      })
      setDeleteObj(null)
      afterRemoveSuccess()
    }

    const onError = (error: AxiosError) => {
      console.debug(error)
      setAlert({
        message: errorMessage,
        color: COLORS.ERROR,
        show: true,
      })
    }

    if (deleteObj) {
      deleteApi({ id: get(deleteObj, 'id', '') as string })
        .then(onSuccess)
        .catch(onError)
    }
  }

  return {
    deleteObj,
    setDeleteObj,
    closeDeleteConfirmation,
    openDeleteConfirmation,
    removeItem,
  }
}

export default useDeleteModal
