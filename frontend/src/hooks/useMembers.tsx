import { AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import apiHelper from '../api/apiHelper'
import { MembersContext } from '../redux/members/context'
import { MEMBERS_ACTION_TYPES } from '../redux/members/reducer'

const useMembers = () => {
  const { state, dispatch }: any = React.useContext(MembersContext)
  const members = get(state, 'members', [])

  const getAllMembers = React.useCallback(() => {
    const onSuccessMembers = (response: AxiosResponse) => {
      const data = get(response, 'data', [])
      dispatch({
        type: MEMBERS_ACTION_TYPES.GET_MEMBERS,
        value: data
      })
    }
    apiHelper.members.getAll().then(onSuccessMembers)
  }, [dispatch])

  React.useEffect(() => {
    getAllMembers()
  }, [getAllMembers])

  return { members, getAllMembers }
}

export default useMembers