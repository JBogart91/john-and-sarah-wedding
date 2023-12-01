import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { NavigationBar } from '..'

describe('NavigationBar', () => {
  it('renders correctly', () => {
    const result = render(<NavigationBar />)
    expect(result).toMatchSnapshot()
  })
})
