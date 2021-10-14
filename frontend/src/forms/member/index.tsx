import { AxiosResponse } from 'axios'
import get from 'lodash/get'
import head from 'lodash/head'
import * as React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Form from '../../components/form'
import TextField from '../../components/text-field'
import Typography from '../../components/typography'
import Upload from '../../components/upload'
import {
  BACKEND,
  BUTTON_VARIANT,
  COLORS,
  FORM_MODE,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT
} from '../../constants/settings'
import useAlert from '../../hooks/useAlert'
import useLanguage from '../../hooks/useLanguage'
import prepareFormData from '../../utilties/prepareFormData'
import prepareValidationSchema from '../../utilties/prepareValidationSchema'
import { INITIAL_DATA, schema } from './common'
import omit from 'lodash/omit'

interface IMemberForm {
  buttonLabel: string
  setValue?: IMembers
  mode: FORM_MODE
  api: ({ id, body }: any) => Promise<AxiosResponse<unknown, any>>
  afterSuccess?: () => any | void
  afterError?: () => any | void
}

const MemberForm: React.FC<IMemberForm> = ({
  buttonLabel,
  setValue,
  mode,
  api,
  afterSuccess,
  afterError,
}): JSX.Element => {
  const { setAlert } = useAlert()
  const { t } = useLanguage()
  const [form, setForm] =
    React.useState<Omit<IMembers, 'profile_photo' | 'id'>>(INITIAL_DATA)
  const [error, setError] =
    React.useState<Omit<IMembers, 'profile_photo' | 'id'>>(INITIAL_DATA)
  const isAddMode = FORM_MODE.ADD === mode
  const isEditMode = FORM_MODE.EDIT === mode

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = head(get(event, 'target.files', []))
    setForm({
      ...form,
      [event.target.name]: image,
    })
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    const onValidationSuccess = () => {
      const onSuccess = () => {
        setAlert({
          color: COLORS.SUCCESS,
          ...(isAddMode
            ? {
                message: t('MEMBER_SUCCESSFULLY_CREATED'),
              }
            : {}),
          ...(isEditMode
            ? {
                message: t('MEMBER_SUCCESSFULLY_UPDATED'),
              }
            : {}),
          show: true,
        })
        if (isAddMode) {
          setForm(INITIAL_DATA)
          setError(INITIAL_DATA)
        }
        if (afterSuccess) afterSuccess()
      }
      const onError = () => {
        setAlert({
          color: COLORS.ERROR,
          ...(isAddMode
            ? {
                message: t('MEMBER_CREATION_WAS_DENIED'),
              }
            : {}),
          ...(isEditMode
            ? {
                message: t('MEMBER_UPDATE_WAS_DENIED'),
              }
            : {}),
          show: true,
        })
        if (afterError) afterError()
      }

      if (isAddMode) {
        api({ body: prepareFormData({ form }) })
          .then(onSuccess)
          .catch(onError)
      }
      if (isEditMode) {
        api({ id: get(setValue, 'id', ''), body: prepareFormData({ form: {
          ...omit(setValue, ['profile_photo']),
          ...form,
        } }) })
          .then(onSuccess)
          .catch(onError)
      }
    }

    const onValidationError = (validationObj: any) => {
      const errorObj = prepareValidationSchema(validationObj)
      if (errorObj && Object.keys(errorObj)) setError({ ...error, ...errorObj })
    }

    schema({ t })
      .validate(form, { abortEarly: false })
      .then(onValidationSuccess)
      .catch(onValidationError)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({
      ...error,
      [event.target.name]: '',
    })
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  React.useEffect(() => {
    if (setValue && Object.keys(setValue).length) {
      setForm(setValue)
    }
  }, [setValue])

  const profile_photo = get(form, 'profile_photo.filename', get(form, 'profile_photo', ''))

  return (
    <Form fieldset={true} onSubmit={handleSubmit}>
      <Box className={'form-control'}>
        <Upload
          onChange={onChangeImage}
          name={'profile_photo'}
          id={'member-form-profile-photo'}
          src={
            profile_photo
              ? typeof profile_photo == 'string'
                ? `${BACKEND.URI}/members/${profile_photo}`
                : URL.createObjectURL(profile_photo)
              : ''
          }
          error={t(error.name)}
        />
        <Box className={'center'}>
          <Typography
            component={TYPOGRAPHY_COMPONENT.SMALL}
            variant={TYPOGRAPHY_VARIANT.SUBTITLE_2}
          >
            {t('PLEASE_CLICK_THE_AVATAR_TO_UPLOAD')}
          </Typography>
        </Box>
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-name'}
          label={t('NAME')}
          placeholder={t('eg: John Doe')}
          onChange={onChange}
          value={form.name}
          error={t(error.name)}
          name={'name'}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-username'}
          label={t('USERNAME')}
          placeholder={t('eg: riley55')}
          onChange={onChange}
          value={form.username}
          error={t(error.username)}
          name={'username'}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-email'}
          inputMode={'email'}
          label={t('EMAIL')}
          placeholder={t('ok@gmail.com, ok@hotmail.com, ok@yahoo.com etc...')}
          onChange={onChange}
          value={form.email}
          error={t(error.email)}
          name={'email'}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-address'}
          label={t('ADDRESS')}
          placeholder={t('City, Zipcode...etc')}
          onChange={onChange}
          value={form.address}
          error={t(error.address)}
          name={'address'}
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-phone'}
          label={t('PHONE')}
          placeholder={t('eg: 444-444-4492')}
          onChange={onChange}
          value={form.phone}
          error={t(error.phone)}
          name={'phone'}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          inputMode={'url'}
          id={'member-form-website'}
          label={t('WEBSITE')}
          onChange={onChange}
          value={form.website}
          error={t(error.website)}
          name={'website'}
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-occupation'}
          label={t('OCCUPATION')}
          onChange={onChange}
          value={form.occupation}
          error={t(error.occupation)}
          name={'occupation'}
        />
      </Box>
      <Box className={'form-control'}>
        <Button
          variant={BUTTON_VARIANT.CONTAINED}
          color={COLORS.SUCCESS}
          className={'center'}
          fullWidth={true}
        >
          <Typography style={{ marginTop: 0, marginBottom: 0 }}>
            {buttonLabel ? buttonLabel : ''}
          </Typography>
        </Button>
      </Box>
    </Form>
  )
}

export default MemberForm
