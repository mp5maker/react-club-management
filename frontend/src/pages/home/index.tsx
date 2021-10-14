import {
  faIdCard,
  faPencilAlt,
  faPlus,
  faTable,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import * as React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Header from '../../components/header'
import Modal from '../../components/modal'
import Table from '../../components/table'
import Typography from '../../components/typography'
import { BUTTON_VARIANT, COLORS } from '../../constants/settings'
import MemberForm from '../../forms/member'
import useLanguage from '../../hooks/useLanguage'
import useMembers from '../../hooks/useMembers'

interface IHomeProps {}

enum HOME_VIEW_MODE {
  TABLE = 'TABLE',
  CARD = 'CARD',
}

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { members } = useMembers()
  const { t } = useLanguage()
  const [showAddModal, setShowAddModal] = React.useState<boolean>(false)
  const [viewType, setViewType] = React.useState<HOME_VIEW_MODE>(
    HOME_VIEW_MODE.TABLE
  )
  const isTable = viewType === HOME_VIEW_MODE.TABLE
  const isCard = viewType === HOME_VIEW_MODE.CARD

  const openAddMember = () => setShowAddModal(true)
  const closeAddMember = () => setShowAddModal(false)

  const changeViewMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = get(event, 'target.value', '')
    setViewType(value)
  }

  const editMember = ({ row }: { row: IMembers }) => {
    console.log(row)
  }

  const removeMember = ({ row }: { row: IMembers }) => {
    console.log(row)
  }

  const memberHeaders = {
    id: t('ID'),
    name: t('NAME'),
    username: t('USERNAME'),
    email: t('EMAIL'),
    address: t('ADDRESS'),
    phone: t('PHONE'),
    website: t('WEBSITE'),
    occupation: t('OCCUPATION'),
  }

  const AddMemberModalContent = (
    <Modal
      isVisible={showAddModal}
      onClose={closeAddMember}
      title={t('ADD_MEMBER')}
    >
      <MemberForm />
    </Modal>
  )

  const HeaderContent = (
    <Header
      title={t('MEMBERS')}
      right={
        <Box className={'space-between'}>
          <Button onClick={openAddMember} className={'circle-medium'}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          {isCard ? (
            <Button
              onClick={changeViewMode}
              className={'circle-medium'}
              value={HOME_VIEW_MODE.TABLE}
              style={{ marginLeft: 'var(--small)' }}
            >
              <FontAwesomeIcon icon={faTable} />
            </Button>
          ) : (
            <></>
          )}
          {isTable ? (
            <Button
              onClick={changeViewMode}
              className={'circle-medium'}
              value={HOME_VIEW_MODE.CARD}
              style={{ marginLeft: 'var(--small)' }}
            >
              <FontAwesomeIcon icon={faIdCard} />
            </Button>
          ) : (
            <></>
          )}
        </Box>
      }
    />
  )

  const TableContent = (
    <Table
      autoSerial={false}
      rowOptions={({ row }) => {
        return (
          <Box className={'center'} style={{ height: '100%' }}>
            <Box className={'space-between'}>
              <Button
                onClick={() => editMember({ row })}
                className={'circle-medium'}
                variant={BUTTON_VARIANT.CONTAINED}
                color={COLORS.SECONDARY}
                style={{ marginRight: 'var(--small)' }}
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </Button>
              <Button
                onClick={() => removeMember({ row })}
                className={'circle-medium'}
                variant={BUTTON_VARIANT.CONTAINED}
                color={COLORS.SECONDARY}
                style={{ marginRight: 'var(--small)' }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Box>
          </Box>
        )
      }}
      list={members}
      properties={[
        'id',
        'name',
        'username',
        'email',
        'address',
        'phone',
        'website',
        'occupation',
      ]}
      customHeader={({ row }) => {
        return (
          <Box>
            <Typography>{memberHeaders[row]}</Typography>
          </Box>
        )
      }}
      customBody={({ row, column }) => {
        return (
          <Box>
            <Typography>{row[column]}</Typography>
          </Box>
        )
      }}
    />
  )

  return (
    <>
      {AddMemberModalContent}
      <Box className={'home-page-container'}>
        <Box>
          {HeaderContent}
          {isTable ? TableContent : <></>}
        </Box>
      </Box>
    </>
  )
}

export default Home
