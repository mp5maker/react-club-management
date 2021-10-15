import { AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Form from '../../components/form'
import Select from '../../components/select'
import TextField from '../../components/text-field'
import Typography from '../../components/typography'
import { BUTTON_VARIANT, COLORS, FORM_MODE } from '../../constants/settings'
import useAlert from '../../hooks/useAlert'
import useBusy from '../../hooks/useBusy'
import useLanguage from '../../hooks/useLanguage'
import useMembers from '../../hooks/useMembers'
import prepareMemberOptions from '../../utilties/prepareMemberOptions'
import prepareValidationSchema from '../../utilties/prepareValidationSchema'
import { INITIAL_DATA, schema } from './common'

export interface ISchedulesForm {
  buttonLabel: string
  setValue?: Partial<ISchedules>
  mode: FORM_MODE
  api: ({ id, body }: any) => Promise<AxiosResponse<unknown, any>>
  afterSuccess?: () => any | void
  afterError?: () => any | void
}

export interface IScheduleFormForwardRef {
  clear: () => void
}

const SchedulesForm = React.forwardRef<
  IScheduleFormForwardRef,
  ISchedulesForm
>(
  (
    { buttonLabel, setValue, mode, api, afterSuccess, afterError },
    ref
  ): JSX.Element => {
    const { setAlert } = useAlert()
    const { setBusy } = useBusy()
    const { t } = useLanguage()
    const [form, setForm] = React.useState<Omit<ISchedules, 'id'>>(INITIAL_DATA)
    const [error, setError] =
      React.useState<Omit<ISchedules, 'id'>>(INITIAL_DATA)
    const isAddMode = FORM_MODE.ADD === mode
    const isEditMode = FORM_MODE.EDIT === mode
    const { members } = useMembers()
    const memberOptions = prepareMemberOptions(members)

    React.useImperativeHandle(ref, () => {
      return {
        clear() {
          setForm(INITIAL_DATA)
          setError(INITIAL_DATA)
        },
      }
    })

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault()
      const onValidationSuccess = () => {
        const onSuccess = () => {
          setBusy(false)
          setAlert({
            color: COLORS.SUCCESS,
            ...(isAddMode
              ? {
                  message: t('SCHEDULE_SUCCESSFULLY_CREATED'),
                }
              : {}),
            ...(isEditMode
              ? {
                  message: t('SCHEDULE_SUCCESSFULLY_UPDATED'),
                }
              : {}),
            show: true,
          })
          if (afterSuccess) afterSuccess()
          setForm(INITIAL_DATA)
          setError(INITIAL_DATA)
        }
        const onError = () => {
          setBusy(false)
          setAlert({
            color: COLORS.ERROR,
            ...(isAddMode
              ? {
                  message: t('SCHEDULE_CREATION_WAS_DENIED'),
                }
              : {}),
            ...(isEditMode
              ? {
                  message: t('SCHEDULE_UPDATE_WAS_DENIED'),
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
        if (errorObj && Object.keys(errorObj))
          setError({ ...error, ...errorObj })
      }

      schema({ t })
        .validate(form, { abortEarly: false })
        .then(onValidationSuccess)
        .catch(onValidationError)
    }

    const onChange = (
      event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
    ) => {
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
        setForm((prevForm) => ({
          ...prevForm,
          ...setValue,
        }))
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
            required
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
          <TextField
            type={'time'}
            id={'schedules-form-start-time'}
            label={t('START_TIME')}
            onChange={onChange}
            value={form.start_time}
            error={t(error.start_time as string)}
            name={'start_time'}
            required
          />
        </Box>
        <Box className={'form-control'}>
          <TextField
            type={'time'}
            id={'schedules-form-end-time'}
            label={t('END_TIME')}
            onChange={onChange}
            value={form.end_time}
            error={t(error.end_time as string)}
            name={'end_time'}
            required
          />
        </Box>
        <Box className={'form-control'}>
          <Select
            id={'schedules-form-member-id'}
            label={t('MEMBERS')}
            options={memberOptions}
            onChange={onChange}
            value={form.member_id}
            placeholder={t('PLEASE_SELECT_AN_OPTION')}
            error={t(error.member_id as string)}
            name={'member_id'}
            required
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
)

export default SchedulesForm
