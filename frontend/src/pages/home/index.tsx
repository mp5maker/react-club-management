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
import { useHistory } from 'react-router'
import { v4 } from 'uuid'
import apiHelper from '../../api/apiHelper'
import Box from '../../components/box'
import Button from '../../components/button'
import Card from '../../components/card'
import Header from '../../components/header'
import Table from '../../components/table'
import Typography from '../../components/typography'
import routes from '../../constants/routes'
import { BUTTON_VARIANT, COLORS, VIEW_MODE } from '../../constants/settings'
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
  console.log('viewMode', viewMode)
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
              onClick={() => handleViewMode(VIEW_MODE.CARD)}
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
