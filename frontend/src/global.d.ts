interface IMembers {
  id: string
  name: string
  username: string
  email: string
  address: string
  phone: string
  website: string
  occupation: string
  profile_photo?: { [x: string]: string }
}

interface ISchedules {
  id: string
  date: string
  start_time: string
  end_time: string
  member_id: string
  title?: string
  description?: string
}
