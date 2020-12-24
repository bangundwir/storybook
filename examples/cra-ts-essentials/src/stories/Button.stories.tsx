import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { defaultValue: 'Button' },
  },
} as Meta;

const ArgsFirstTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = ArgsFirstTemplate.bind({});
Primary.args = {
  children: 'foo',
  size: 'large',
};

const ContextTemplate: Story<ButtonProps> = ({ args }) => <Button {...args} />;

export const Secondary = ContextTemplate.bind({});
Secondary.parameters = {
  passArgsFirst: false,
};
Secondary.args = {
  children: 'Children coming from story args!',
  primary: false,
};
