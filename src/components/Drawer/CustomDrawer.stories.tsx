import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CustomDrawer } from './CustomDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Drawer',
  component: CustomDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <CustomDrawer {...args} />;

export const Default = Template.bind({});
Default.storyName = 'default';
