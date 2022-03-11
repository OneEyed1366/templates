import StorybookButton from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/StorybookButton',
  component: StorybookButton,
  parameters: {
    docs: {
      description: {
        component: 'Just a button'
      }
    },
    args: {
      type: 'primary'
    },
    argTypes: {
      label: {
        description: 'Inner text',
        control: 'text',
      },
      backgroundColor: {
        description: 'Background color',
        control: 'color'
      },
    },
  }
} as ComponentMeta<typeof StorybookButton>

const Template: ComponentStory<typeof StorybookButton> = (args) => (
  <StorybookButton {...args} />
)
export const Button = Template.bind({});
Button.args = {
  backgroundColor: '#000000',
  label: 'Click on me',
}
