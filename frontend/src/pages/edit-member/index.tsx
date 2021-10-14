import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { useHistory, useParams } from 'react-router'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import Button from '../../components/button'
import Header from '../../components/header'
import MemberForm from '../../forms/member'
import useLanguage from '../../hooks/useLanguage'

interface IEditMemberProps {}

const EditMember: React.FC<IEditMemberProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const history = useHistory()
  const params = useParams()
  const id = get(params, 'id', '')

  React.useEffect(() => {
    const getMember = () => {
      if (id) {
        const onSuccess = (response: AxiosResponse) => {
          const data = get(response, 'data', '')
          console.log(data)
        }

        const onError = (error: AxiosError) => console.debug(error)

        apiHelper.members.get({ id }).then(onSuccess).catch(onError)
      }
    }
    getMember()
  }, [id])

  const goBack = () => history.goBack()

  return (
    <Box className={'edit-member-page-container'}>
      <Header
        title={t('EDIT_MEMBER')}
        right={
          <Box className={'space-between'}>
            <Button onClick={goBack} className={'circle-medium'}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
          </Box>
        }
      />
      <Box className={'center'}>
        <Box style={{ width: 500, padding: 'var(--medium)' }}>
          <MemberForm buttonLabel={t('UPDATE_MEMBER')}/>
        </Box>
      </Box>
    </Box>
  )
}

export default EditMember
