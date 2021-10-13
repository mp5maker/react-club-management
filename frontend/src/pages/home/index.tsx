import * as React from 'react'
import Box from '../../components/box'
import Header from '../../components/header'
import Table from '../../components/table'
import Typography from '../../components/typography'
import useLanguage from '../../hooks/useLanguage'
import useMembers from '../../hooks/useMembers'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { members } = useMembers()
  const { t } = useLanguage()

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

  return (
    <Box className={'home-page-container'}>
      <Box>
        <Header title={t('MEMBERS')} />
        <Table
          autoSerial={false}
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
      </Box>
    </Box>
  )
}

export default Home
