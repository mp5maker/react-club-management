import * as React from 'react'
import Box from '../../components/box'
import Header from '../../components/header'
import useLanguage from '../../hooks/useLanguage'
import useMembers from '../../hooks/useMembers'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { members } = useMembers()
  const { t } = useLanguage()
  console.log(members)

  return (
    <Box className={'home-page-container'}>
      <Header title={t('MEMBERS')} />
    </Box>
  )
}

export default Home
