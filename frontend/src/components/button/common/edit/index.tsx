import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../..'
import { BUTTON_VARIANT, COLORS } from '../../../../constants/settings'

interface IEditButton<T> {
  row: T
  onClick: ({ row }: { row: T }) => any | void
}

const EditButton = <T,>({ onClick, row }: IEditButton<T>): JSX.Element => {
  return (
    <Button
      aria-label={'Edits item'}
      onClick={() => onClick({ row })}
      className={'circle-medium margin-right-s'}
      variant={BUTTON_VARIANT.CONTAINED}
      color={COLORS.SECONDARY}
    >
      <FontAwesomeIcon icon={faPencilAlt} />
    </Button>
  )
}

export default EditButton
