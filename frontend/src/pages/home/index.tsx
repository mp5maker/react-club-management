import * as React from 'react'
import useMembers from '../../hooks/useMembers'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { members } = useMembers()
  console.log(members)

  return (
    <div className={'home-page-container'}>
      home page
    </div>
  )
}

export default Home