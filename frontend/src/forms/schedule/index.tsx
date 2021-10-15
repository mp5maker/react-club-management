import { AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Form from '../../components/form'
import TextField from '../../components/text-field'
import Typography from '../../components/typography'
import { BUTTON_VARIANT, COLORS, FORM_MODE } from '../../constants/settings'
import useAlert from '../../hooks/useAlert'
import useBusy from '../../hooks/useBusy'
import useLanguage from '../../hooks/useLanguage'
import prepareValidationSchema from '../../utilties/prepareValidationSchema'
import { INITIAL_DATA, schema } from './common'

interface ISchedulesForm {
  buttonLabel: string
  setValue?: ISchedules
  mode: FORM_MODE
  api: ({ id, body }: any) => Promise<AxiosResponse<unknown, any>>
  afterSuccess?: () => any | void
  afterError?: () => any | void
}

const SchedulesForm: React.FC<ISchedulesForm> = ({
  buttonLabel,
  setValue,
  mode,
  api,
  afterSuccess,
  afterError,
}): JSX.Element => {
  const { setAlert } = useAlert()
  const { setBusy } = useBusy()
  const { t } = useLanguage()
  const [form, setForm] = React.useState<Omit<ISchedules, 'id'>>(INITIAL_DATA)
  const [error, setError] = React.useState<Omit<ISchedules, 'id'>>(INITIAL_DATA)
  const isAddMode = FORM_MODE.ADD === mode
  const isEditMode = FORM_MODE.EDIT === mode

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    const onValidationSuccess = () => {
      const onSuccess = () => {
        setBusy(false)
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
        setBusy(false)
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
        setBusy(true)
        api({ body: form }).then(onSuccess).catch(onError)
      }
      if (isEditMode) {
        setBusy(true)
        api({
          id: get(setValue, 'id', ''),
          body: form,
        })
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

  return (
    <Form fieldset={true} onSubmit={handleSubmit}>
      <Box className={'form-control'}>
        <TextField
          id={'schedules-form-title'}
          label={t('TITLE')}
          placeholder={t('eg: Recreation Tea Party')}
          onChange={onChange}
          value={form.title}
          error={t(error.title as string)}
          name={'title'}
        />
      </Box>
      <Box className={'form-control'}>
        <TextField
          id={'schedules-form-description'}
          label={t('DESCRIPTION')}
          placeholder={t('eg: Write down the notes')}
          onChange={onChange}
          value={form.description}
          error={t(error.description as string)}
          name={'description'}
        />
      </Box>
      <Box className={'form-control'}>
        <Button
          variant={BUTTON_VARIANT.CONTAINED}
          color={COLORS.SUCCESS}
          className={'center'}
          fullWidth={true}
        >
          <Typography className={'margin-top-none margin-bottom-none'}>
            {buttonLabel ? buttonLabel : ''}
          </Typography>
        </Button>
      </Box>
    </Form>
  )
}

export default SchedulesForm
