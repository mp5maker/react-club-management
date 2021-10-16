import * as yup from 'yup'

export const INITIAL_DATA = {
  date: '',
  start_time: '',
  end_time: '',
  member_id: '',
  title: '',
  description: '',
}

export const schema = ({ t }: { t: (val: string) => string }) =>
  yup.object().shape({
    title: yup.string().required('THIS_FIELD_IS_REQUIRED'),
    description: yup.string(),
    date: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    start_time: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    end_time: yup
      .string()
      .test(
        t('END_TIME_GREATER_THAN_START_TIME'),
        t('END_TIME_NEEDS_TO_BE_GREATER_THAN_START_TIME'),
        function (value) {
          return (
            Date.parse(`01/01/2011 ${value}:00`) > Date.parse(`01/01/2011 ${this.parent.start_time}:00`)
          )
        }
      )
      .required(t('THIS_FIELD_IS_REQUIRED')),
    member_id: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
  })
