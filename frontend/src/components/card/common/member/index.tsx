
import get from 'lodash/get'
import * as React from 'react'
import {
  BACKEND,
  IMAGE_AVATAR_SIZE,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../../../constants/settings'
import Box from '../../../box'
import Image from '../../../image'
import Typography from '../../../typography'

interface IMemberCard {
  item: IMembers
}

const MemberCard: React.FC<IMemberCard> = ({ item }) => {
  const profile_photo = get(item, 'profile_photo.filename', '')
  const name = get(item, 'name', '')
  const username = get(item, 'username', '')
  const email = get(item, 'email', '')
  const phone = get(item, 'phone', '')
  const occupation = get(item, 'occupation', '')

  return (
    <>
      <Box className={'center card-avatar'}>
        <Image
          src={`${BACKEND.URI}/members/${profile_photo}`}
          avatar={IMAGE_AVATAR_SIZE.LARGE}
        />
      </Box>
      <Box className={'card-info'}>
        <Box>
          <Typography variant={TYPOGRAPHY_VARIANT.H6}>{name}</Typography>
        </Box>
        <Box>
          <Typography
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_1}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {username}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_1}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {email}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_1}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {phone}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_1}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {occupation}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default MemberCard
