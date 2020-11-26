import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-rounded/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render small size button', () => {
    renderWithTheme(<Button size="small">Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    })
  })

  it('should render large size button', () => {
    renderWithTheme(<Button size="large">Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      fontSize: '1.6rem'
    })
  })

  it('should render full width button', () => {
    renderWithTheme(<Button fullWidth>Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy</Button>
    )
    expect(screen.getByText(/buy/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy
      </Button>
    )
    expect(screen.getByRole('link', { name: /buy/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
