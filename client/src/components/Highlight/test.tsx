import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/games/rdr2',
  backgroundImage: '/img/red-dead-img.png',
  floatImage: '/red-dead-float.png'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)
    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render the float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/red-dead-float.png" />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/red-dead-float.png'
    )
  })

  it('should render aligned right headings and button by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render aligned left headings and button if alignment property is passed to the component', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
