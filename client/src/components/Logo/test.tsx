import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the white Logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the black Logo when color is passed to the Logo component', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
