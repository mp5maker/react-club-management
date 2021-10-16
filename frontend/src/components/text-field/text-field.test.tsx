import { fireEvent, render } from '@testing-library/react'
import get from 'lodash/get'
import * as React from 'react'
import TextField from '.'
import Box from '../box'
import Typography from '../typography'

const Scenario = () => {
  const [name, setName] = React.useState<string>('')
  return (
    <>
      <Box>
        <Typography text-id="display">My name is ${name}</Typography>
      </Box>
      <TextField
        name="name"
        aria-label="username"
        id="username-id"
        placeholder={'Please enter your name'}
        onChange={(event) => setName(get(event, 'target.name', ''))}
      />
    </>
  )
}

const setup = () => {
  const utils = render(<Scenario />)
  const input = utils.getByLabelText('username')
  return {
    input,
    ...utils,
  }
}

describe('It should render [TextField] component properly', () => {
  it('should render input field properly', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'John' } })
    expect(get(input, 'value', '')).toBe('John')
  })
})
