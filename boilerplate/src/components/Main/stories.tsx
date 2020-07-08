import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'Won Games')}
    description={text(
      'Description',
      'An e-commerce project for games build with Typescript, React, Next and Styled-Components'
    )}
  />
)
