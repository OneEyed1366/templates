import { ComponentMeta, ComponentStory } from '@storybook/react';
import VanillaStoriesButton from './index';
import { Button } from '../../stories/Button';
import React from 'react';

export default {
  title: 'Components/StoriesButton',
  component: VanillaStoriesButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: 'Button inner text',
      defaultValue: 'Default click',
      control: 'text',
    },
    backgroundColor: {
      defaultValue: '#000000',
      control: 'color',
    },
  },
} as ComponentMeta<typeof VanillaStoriesButton>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
