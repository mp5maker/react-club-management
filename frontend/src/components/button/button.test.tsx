import { fireEvent, render, screen } from '@testing-library/react'
import Button from '.'
import { BUTTON_VARIANT, COLORS } from '../../constants/settings'

jest.mock('../../hooks/useBusy', () => ({
  __esModule: true,
  default: () => ({
    busy: false,
  }),
}))

describe('It shoud render [button] component properly', () => {
  it('It should render button properly', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Confirm</Button>)
    const button = screen.getByText('Confirm')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
  it('It should render disable button properly', async () => {
    const onClick = jest.fn()
    render(
      <Button onClick={onClick} disabled={true}>
        Confirm
      </Button>
    )
    const button = screen.getByText('Confirm')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })
  it('It should render style button (Contained) properly', async () => {
    render(
      <Button variant={BUTTON_VARIANT.CONTAINED} color={COLORS.SECONDARY}>
        Confirm
      </Button>
    )
    const button = screen.getByText('Confirm')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`backgroundColor: ${COLORS.SECONDARY}`)
  })
})
