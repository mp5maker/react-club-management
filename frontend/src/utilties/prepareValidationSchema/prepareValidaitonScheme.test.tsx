import prepareValidationScheme from '.'

describe('Check Function [prepareValidationScheme] is working properly', () => {
  it('should prepare validation  properly', () => {
    const validationObj = {
      inner: [
        { path: 'name', message: 'Name cannot be over 50 characters' },
        { path: 'email', message: 'Email is invalid' },
      ],
    }
    const sampleDateOne = prepareValidationScheme(validationObj)
    expect(sampleDateOne).toEqual({
      name: 'Name cannot be over 50 characters',
      email: 'Email is invalid',
    })
  })
})
