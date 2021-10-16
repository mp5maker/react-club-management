import format from 'date-fns/format'
import get from 'lodash/get'
import * as React from 'react'
import {
  COLORS,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../../../constants/settings'
import prepareDateWithTime from '../../../../utilties/prepareDateWithTime'
import Box from '../../../box'
import Typography from '../../../typography'

interface ISchedulesCard {
  item: ISchedules
  member?: IMembers
}

const ScheduleCard: React.FC<ISchedulesCard> = ({ item, member }) => {
  const title = get(item, 'title', '')
  const description = get(item, 'description', '')
  const start_time = get(item, 'start_time', '')
  const end_time = get(item, 'end_time', '')
  const date = get(item, 'date', '')

  const startTime = prepareDateWithTime({ date, time: start_time })
  const endTime = prepareDateWithTime({ date, time: end_time })

  return (
    <>
      <Box
        className={'card-info'}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Box>
          <Typography variant={TYPOGRAPHY_VARIANT.H5} color={COLORS.SECONDARY}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={TYPOGRAPHY_VARIANT.BODY}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {format(startTime, 'yyyy-MMM-dd')}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_1}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {format(startTime, 'hh:mm a')} {`->`} {format(endTime, 'hh:mm a')}
          </Typography>
        </Box>
        <Box style={{ flexGrow: 0 }}>
          <Typography
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_1}
            component={TYPOGRAPHY_COMPONENT.SMALL}
          >
            {description}
          </Typography>
        </Box>
        {member ? (
          <Box
            color={COLORS.SECONDARY}
            className={'padding-s center margin-top-auto rounded-border-radius'}
          >
            <Typography className={'margin-none'}>
              {get(member, 'name', '')}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  )
}

export default ScheduleCard
