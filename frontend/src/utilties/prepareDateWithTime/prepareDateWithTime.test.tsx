import format from 'date-fns/format'
import prepareDateWithTime from '.'

describe('Check Function [prepareDateWithTime] is working properly', () => {
  it('should change the hours properly', () => {
    const sampleDateOne = prepareDateWithTime({
      date: String(1634752800000),
      time: '11:00',
    })
    expect(format(sampleDateOne, 'HH')).toBe('11')
  })
  it('should change the hours properly', () => {
    const sample = prepareDateWithTime({
      date: String(1634752800000),
      time: '15:00',
    })
    expect(format(sample, 'HH')).toBe('15')
  })
  it('should change the minutes properly', () => {
    const sample = prepareDateWithTime({
      date: String(1634752800000),
      time: '00:15',
    })
    expect(format(sample, 'mm')).toBe('15')
  })
  it('should change the minutes properly', () => {
    const sample = prepareDateWithTime({
      date: String(1634752800000),
      time: '00:37',
    })
    expect(format(sample, 'mm')).toBe('37')
  })
  it('should change the hours and minutes properly', () => {
    const sample = prepareDateWithTime({
      date: String(1634752800000),
      time: '11:37',
    })
    expect(format(sample, 'HH:mm')).toBe('11:37')
  })
})
