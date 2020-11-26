import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render ribbon', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the primary color ribbon by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render the secondary color ribbon when the color is passed to the component', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render the normal size ribbon by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.5rem',
      fontSize: '1.4rem'
    })
  })

  it('should render the small size ribbon when size is passed to the component', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.5rem',
      fontSize: '1.2rem'
    })
  })
})
