import get from 'lodash/get'

const prepareMemberOptions = (options: Array<IMembers>) => {
  return options.map((item) => {
    const id = get(item, 'id', '')
    const label = [get(item, 'name', ''), get(item, 'username', '')].join(', ')

    return {
      value: id,
      label,
    }
  })
}

export default prepareMemberOptions
