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
import routes from '../../constants/routes'
import { FORM_MODE } from '../../constants/settings'
import MemberForm from '../../forms/member'
import useLanguage from '../../hooks/useLanguage'

interface IEditMemberProps {}

const EditMember: React.FC<IEditMemberProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const history = useHistory()
  const params = useParams()
  const id = get(params, 'id', '')
  const [editData, setEditData] = React.useState<IMembers | null>(null)

  const afterMemberUpdate = () => {
    history.push(routes.root.path)
  }

  React.useEffect(() => {
    const getMember = () => {
      if (id) {
        const onSuccess = (response: AxiosResponse) => {
          const data = get(response, 'data', '')
          if (data) setEditData(data as IMembers)
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
            <Button
              onClick={goBack}
              className={'circle-medium'}
              aria-label={'Go back to the home page'}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
          </Box>
        }
      />
      <Box className={'center'}>
        <Box style={{ width: 500, padding: 'var(--medium)' }}>
          {editData ? (
            <MemberForm
              afterSuccess={afterMemberUpdate}
              buttonLabel={t('UPDATE_MEMBER')}
              setValue={editData}
              mode={FORM_MODE.EDIT}
              api={apiHelper.members.update}
            />
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default EditMember
