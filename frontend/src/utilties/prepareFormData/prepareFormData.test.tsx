import prepareFormData from '.'

describe('Check Function [prepareFormData] is working properly', () => {
  const form = {
    name: 'John Doe',
    occupation: 'None'
  }

  it('should prepare form data properly', () => {
    const sampleDateOne = prepareFormData({
      form
    })
    expect(sampleDateOne.has('name')).toBeTruthy()
    expect(sampleDateOne.has('age')).toBeFalsy()
    expect(sampleDateOne.get('age')).toBeNull()
    expect(sampleDateOne.get('name')).toBe(form.name)
  })
})
