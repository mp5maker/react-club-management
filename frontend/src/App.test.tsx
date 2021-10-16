import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Routes } from './App'

jest.mock('./hooks/useLanguage', () => ({
  __esModule: true,
  default: () => ({
    t: (value: string) => value,
    language: 'en',
    changeLanguage: jest.fn(),
  }),
}))

jest.mock('./hooks/useTheme', () => ({
  __esModule: true,
  default: () => ({
    theme: 'dark',
    changeTheme: jest.fn(),
  }),
}))

jest.mock('./hooks/useSidebar', () => ({
  __esModule: true,
  default: () => ({
    sidebar: 'open',
    changeSidebar: jest.fn(),
  }),
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

jest.mock('./hooks/useMembers', () => ({
  __esModule: true,
  default: () => ({
    members: [],
    getAllMembers: jest.fn(),
    loading: false,
  }),
}))

describe('Check if the react router dom is working properly', () => {
  it('should go to home page first', () => {
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <Routes />
      </Router>
    )

    expect(document.querySelector('.home-page-container')).toBeInTheDocument()
  })

  it('should create snapshot properly', () => {
    const history = createMemoryHistory()
    const tree = renderer
      .create(
        <Router history={history}>
          <Routes />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

export default () => {}
