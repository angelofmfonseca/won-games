import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('sould render medium size button by default', () => {
    renderWithTheme(<Button>Buy</Button>)
    expect(screen.getByRole('button', { name: /buy/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
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
})
