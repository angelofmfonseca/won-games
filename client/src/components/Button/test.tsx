import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-rounded/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('sould render medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('sould render small size button', () => {
    renderWithTheme(<Button size="small">Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('sould render large size button', () => {
    renderWithTheme(<Button size="large">Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('sould render full width button', () => {
    renderWithTheme(<Button fullWidth>Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('sould render the button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy</Button>
    )
    expect(screen.getByText(/buy/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
