import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('sould render heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
