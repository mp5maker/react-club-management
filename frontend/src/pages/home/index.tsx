import { faIdCard, faPlus, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { useHistory } from 'react-router'
import { v4 } from 'uuid'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import Button from '../../components/button'
import DeleteButton from '../../components/button/common/delete'
import EditButton from '../../components/button/common/edit'
import Card from '../../components/card'
import MemberCard from '../../components/card/common/member'
import Header from '../../components/header'
import Modal from '../../components/modal'
import Table from '../../components/table'
import Typography from '../../components/typography'
import routes from '../../constants/routes'
import { CARD_SIZE, COLORS, VIEW_MODE } from '../../constants/settings'
import useAlert from '../../hooks/useAlert'
import useLanguage from '../../hooks/useLanguage'
import useMembers from '../../hooks/useMembers'
import useViewMode from '../../hooks/useViewMode'

interface IHomeProps {}
const generatedID = v4()

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { members, getAllMembers } = useMembers()
  const { t } = useLanguage()
  const { setAlert } = useAlert()
  const history = useHistory()
  const { viewMode, changeViewMode } = useViewMode()
  const [deleteObj, setDeleteObj] = React.useState<IMembers | null>(null)
  const isTable = viewMode === VIEW_MODE.TABLE
  const isCard = viewMode === VIEW_MODE.CARD

  const goToAddMember = () => {
    history.push(routes.addMember.path)
  }

  const handleViewMode = (mode: VIEW_MODE) => {
    changeViewMode(mode)
  }

  const editMember = ({ row }: { row: IMembers }) => {
    const id = get(row, 'id', '')
    history.push(`${routes.editMember.rawPath}/${id}`)
  }

  const removeMember = () => {
    const onSuccess = (response: AxiosResponse) => {
      console.debug(response)
      setAlert({
        message: t('MEMBER_SUCCESSFULLY_DELETED'),
        color: COLORS.SUCCESS,
        show: true,
      })
      setDeleteObj(null)
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

    if (deleteObj) {
      apiHelper.members
        .remove({ id: get(deleteObj, 'id', '') as string })
        .then(onSuccess)
        .catch(onError)
    }
  }
  const closeDeleteConfirmation = () => setDeleteObj(null)
  const openDeleteConfirmation = ({ row }: { row: IMembers }) => {
    setDeleteObj(row)
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

  const DeleteModalContent = (
    <Modal
      title={t('REMOVE_MEMBER')}
      isVisible={deleteObj ? true : false}
      onClose={closeDeleteConfirmation}
      footer={
        <Box className={'grid-two'} style={{ rowGap: '20px' }}>
          <Button color={COLORS.SUCCESS} onClick={removeMember}>
            <Typography className={'margin-none'}>{t('CONFIRM')}</Typography>
          </Button>
          <Button color={COLORS.ERROR} onClick={closeDeleteConfirmation}>
            <Typography className={'margin-none'}>{t('CANCEL')}</Typography>
          </Button>
        </Box>
      }
    >
      <Typography className={'center'}>{t('ARE_YOU_SURE')}</Typography>
      <Typography className={'center'}>
        {t('YOU_WANT_TO_REMOVE')} {get(deleteObj, 'name', '')} ?
      </Typography>
    </Modal>
  )

  const HeaderContent = (
    <Header
      title={t('MEMBERS')}
      right={
        <Box className={'space-between'}>
          <Button onClick={goToAddMember} className={'circle-medium'}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          {isCard ? (
            <Button
              onClick={() => handleViewMode(VIEW_MODE.TABLE)}
              className={'circle-medium margin-left-s'}
            >
              <FontAwesomeIcon icon={faTable} />
            </Button>
          ) : (
            <></>
          )}
          {isTable ? (
            <Button
              onClick={() => handleViewMode(VIEW_MODE.CARD)}
              className={'circle-medium margin-left-s'}
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
              <EditButton row={row} onClick={editMember} />
              <DeleteButton row={row} onClick={openDeleteConfirmation} />
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
        return (
          <Card
            size={CARD_SIZE.MEDIUM}
            key={`${generatedID}-${index}`}
            overlay={
              <Box
                className={'center margin-top-m'}
                style={{ height: '100%', alignItems: 'flex-end' }}
              >
                <Box className={'space-between'}>
                  <EditButton row={item} onClick={editMember} />
                  <DeleteButton row={item} onClick={openDeleteConfirmation} />
                </Box>
              </Box>
            }
          >
            <MemberCard item={item} />
          </Card>
        )
      })}
    </Box>
  )

  return (
    <>
      {DeleteModalContent}
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
