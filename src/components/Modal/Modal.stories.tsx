import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IModalProps, Modal } from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
} as Meta<IModalProps>;

const Template: Story<IModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.storyName = 'default';
Default.args = {
  open: true,
}
