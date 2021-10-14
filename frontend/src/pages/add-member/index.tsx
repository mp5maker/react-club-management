import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { useHistory } from 'react-router'
import Box from '../../components/box'
import Button from '../../components/button'
import Header from '../../components/header'
import MemberForm from '../../forms/member'
import useLanguage from '../../hooks/useLanguage'

interface IAddMemberProps {}

const AddMember: React.FC<IAddMemberProps> = (): JSX.Element => {
  const { t } = useLanguage()
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <Box className={'add-member-page-container'}>
      <Header
        title={t('ADD_MEMBER')}
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
          <MemberForm buttonLabel={t('CREATE_MEMBER')} />
        </Box>
      </Box>
    </Box>
  )
}

export default AddMember
