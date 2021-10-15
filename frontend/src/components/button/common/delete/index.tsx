import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../..'
import { BUTTON_VARIANT, COLORS } from '../../../../constants/settings'

interface IDeleteButton<T> {
  row: T
  onClick: ({ row }: { row: T }) => any | void
}

const DeleteButton = <T,>({ onClick, row }: IDeleteButton<T>): JSX.Element => {
  return (
    <Button
      aria-label={'Deletes item'}
      onClick={() => onClick({ row })}
      className={'circle-medium margin-right-s'}
      variant={BUTTON_VARIANT.CONTAINED}
      color={COLORS.SECONDARY}
    >
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  )
}

export default DeleteButton
