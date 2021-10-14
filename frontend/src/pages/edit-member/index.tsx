import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { useHistory } from 'react-router'
import Box from '../../components/box'
import Button from '../../components/button'
import Header from '../../components/header'
import MemberForm from '../../forms/member'
import useLanguage from '../../hooks/useLanguage'

interface IEditMemberProps {}

const EditMember: React.FC<IEditMemberProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const history = useHistory()

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
          <MemberForm />
        </Box>
      </Box>
    </Box>
  )
}

export default EditMember
