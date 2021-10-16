import * as yup from 'yup'

export const INITIAL_DATA = {
  name: '',
  username: '',
  email: '',
  address: '',
  phone: '',
  website: '',
  occupation: '',
}

export const schema = ({ t }: { t: (val: string) => string })  =>
  yup.object().shape({
    profile_photo: yup.mixed().required('THIS_FIELD_IS_REQUIRED'),
    name: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    username: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    email: yup
      .string()
      .email(t('INVALID_EMAIL_ADDRESS'))
      .required(t('THIS_FIELD_IS_REQUIRED')),
    address: yup.string(),
    phone: yup.string().required(t('THIS_FIELD_IS_REQUIRED')),
    website: yup.string().url(t('INVALID_URL')),
    occupation: yup.string(),
  })
