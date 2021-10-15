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
    title: yup.string(),
    description: yup.string(),
    date: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    start_time: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    end_time: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    member_id: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
  })
