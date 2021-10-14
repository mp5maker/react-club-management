import * as React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Form from '../../components/form'
import TextField from '../../components/text-field'
import Typography from '../../components/typography'
import Upload from '../../components/upload'
import {
  BUTTON_VARIANT,
  COLORS,
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_VARIANT,
} from '../../constants/settings'
import useLanguage from '../../hooks/useLanguage'
import { INITIAL_DATA } from './common'

interface IMemberForm {
  buttonLabel: string
}

const MemberForm: React.FC<IMemberForm> = ({ buttonLabel }): JSX.Element => {
  const { t } = useLanguage()
  const [form, setForm] =
    React.useState<Omit<IMembers, 'profile_photo' | 'id'>>(INITIAL_DATA)
  const [error, setError] =
    React.useState<Omit<IMembers, 'profile_photo' | 'id'>>(INITIAL_DATA)

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(form)
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

  return (
    <Form fieldset={true} onSubmit={handleSubmit}>
      <Box className={'form-control'}>
        <Upload name={'profile_photo'} id={'member-form-profile-photo'} />
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
          error={error.name}
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
          error={error.username}
          name={'username'}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-email'}
          label={t('EMAIL')}
          placeholder={t('ok@gmail.com, ok@hotmail.com, ok@yahoo.com etc...')}
          onChange={onChange}
          value={form.email}
          error={error.email}
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
          error={error.address}
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
          error={error.phone}
          name={'phone'}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-website'}
          label={t('WEBSITE')}
          onChange={onChange}
          value={form.website}
          error={error.website}
          name={'website'}
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-occupation'}
          label={t('OCCUPATION')}
          onChange={onChange}
          value={form.occupation}
          error={error.occupation}
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
