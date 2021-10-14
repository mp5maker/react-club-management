import * as React from 'react'
import Box from '../../components/box'
import Form from '../../components/form'
import TextField from '../../components/text-field'
import Upload from '../../components/upload'
import useLanguage from '../../hooks/useLanguage'

interface IMemberForm {

}

const MemberForm: React.FC<IMemberForm> = (): JSX.Element => {
  const { t } = useLanguage()

  return (
    <Form fieldset={true}>
      <Box className={'form-control'}>
        <Upload
          name={'profile_photo'}
          id={'member-form-profile-photo'}
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-name'}
          label={t('NAME')}
          placeholder={t('eg: John Doe')}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-username'}
          label={t('USERNAME')}
          placeholder={t('eg: riley55')}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-email'}
          label={t('EMAIL')}
          placeholder={t('ok@gmail.com, ok@hotmail.com, ok@yahoo.com etc...')}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-address'}
          label={t('ADDRESS')}
          placeholder={t('City, Zipcode...etc')}
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'member-form-phone'}
          label={t('PHONE')}
          placeholder={t('eg: 444-444-4492')}
          required
        />
      </Box>
      <Box className={'form-control'}>
        <TextField id={'member-form-website'} label={t('WEBSITE')} />
      </Box>
      <Box className={'form-control'}>
        <TextField id={'member-form-occupation'} label={t('OCCUPATION')} />
      </Box>
    </Form>
  )
}

export default MemberForm