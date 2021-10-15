import { screen, render } from '@testing-library/react'
import Box from '.'
import { BOX_COMPONENTS, BOX_VARIANT, COLORS } from '../../constants/settings'

describe('It should render [Box] component properly', () => {
  it('should render box properly', () => {
    render(<Box>Sample</Box>)
    const box = screen.getByText('Sample')
    expect(box).toBeInTheDocument()
    expect(box).toHaveTextContent('Sample')
    expect(box).toHaveStyle(`border: 1px solid ${COLORS.INHERIT}`)
  })
  it('should generate html properly', () => {
    render(
      <Box component={BOX_COMPONENTS.FOOTER} className={'footer'}>
        Footer
      </Box>
    )
    const box = screen.getByText('Footer')
    expect(box).toBeInTheDocument()
    expect(box.outerHTML.includes('footer')).toBeTruthy()
    expect(box.outerHTML.includes('div')).not.toBeTruthy()
  })
  it('should generate contained background color properly', () => {
    render(
      <Box
        component={BOX_COMPONENTS.ASIDE}
        variant={BOX_VARIANT.CONTAINED}
        color={COLORS.PRIMARY}
        className={'aside'}
      >
        Aside
      </Box>
    )
    const box = screen.getByText('Aside')
    expect(box).toBeInTheDocument()
    expect(box.outerHTML.includes('aside')).toBeTruthy()
    expect(box.outerHTML.includes('footer')).not.toBeTruthy()
    expect(box.outerHTML.includes('div')).not.toBeTruthy()
    expect(box).toHaveStyle(`background-color: ${COLORS.PRIMARY}`)
  })
})
