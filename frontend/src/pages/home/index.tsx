import {
  faIdCard,
  faPencilAlt,
  faPlus,
  faTable,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { v4 } from 'uuid'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import Button from '../../components/button'
import Card from '../../components/card'
import Header from '../../components/header'
import Modal from '../../components/modal'
import Table from '../../components/table'
import Typography from '../../components/typography'
import { BUTTON_VARIANT, COLORS } from '../../constants/settings'
import MemberForm from '../../forms/member'
import useAlert from '../../hooks/useAlert'
import useLanguage from '../../hooks/useLanguage'
import useMembers from '../../hooks/useMembers'

interface IHomeProps {}
const generatedID = v4()

enum HOME_VIEW_MODE {
  TABLE = 'TABLE',
  CARD = 'CARD',
}

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { members, getAllMembers } = useMembers()
  const { t } = useLanguage()
  const { setAlert } = useAlert()
  const [showAddModal, setShowAddModal] = React.useState<boolean>(false)
  const [viewType, setViewType] = React.useState<HOME_VIEW_MODE>(
    HOME_VIEW_MODE.TABLE
  )
  const isTable = viewType === HOME_VIEW_MODE.TABLE
  const isCard = viewType === HOME_VIEW_MODE.CARD

  const openAddMember = () => setShowAddModal(true)
  const closeAddMember = () => setShowAddModal(false)

  const changeViewMode = (mode: HOME_VIEW_MODE) => {
    setViewType(mode)
  }

  const editMember = ({ row }: { row: IMembers }) => {
    console.log(row)
  }

  const removeMember = ({ row }: { row: IMembers }) => {
    const id = get(row, 'id', 0)
    const onSuccess = (response: AxiosResponse) => {
      console.debug(response)
      setAlert({
        message: t('MEMBER_SUCCESSFULLY_DELETED'),
        color: COLORS.SUCCESS,
        show: true,
      })
      getAllMembers()
    }

    const onError = (error: AxiosError) => {
      console.debug(error)
      setAlert({
        message: t('MEMBER_CANNOT_BE_DELETED'),
        color: COLORS.ERROR,
        show: true,
      })
    }

    apiHelper.members.remove({ id }).then(onSuccess).catch(onError)
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
              onClick={() => changeViewMode(HOME_VIEW_MODE.TABLE)}
              className={'circle-medium'}
              style={{ marginLeft: 'var(--small)' }}
            >
              <FontAwesomeIcon icon={faTable} />
            </Button>
          ) : (
            <></>
          )}
          {isTable ? (
            <Button
              onClick={() => changeViewMode(HOME_VIEW_MODE.CARD)}
              className={'circle-medium'}
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

  const CardContent = (
    <Box className={'card-collection-container'}>
      {members.map((item: IMembers, index: number) => {
        return <Card item={item} key={`${generatedID}-${index}`} />
      })}
    </Box>
  )

  return (
    <>
      {AddMemberModalContent}
      <Box className={'home-page-container'}>
        <Box>
          {HeaderContent}
          {isTable ? TableContent : <></>}
          {isCard ? CardContent : <></>}
        </Box>
      </Box>
    </>
  )
}

export default Home
