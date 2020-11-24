import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-rounded/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />

Basic.args = {
  children: 'Buy'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy',
  icon: <AddShoppingCart />,
  size: 'small'
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Buy',
  size: 'large',
  as: 'a',
  href: '/link'
}
