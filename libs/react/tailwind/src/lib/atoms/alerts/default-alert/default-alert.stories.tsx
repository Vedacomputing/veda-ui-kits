import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultAlert } from './default-alert';

const Story: ComponentMeta<typeof DefaultAlert> = {
  component: DefaultAlert,
  title: 'DefaultAlert',
};
export default Story;

const Template: ComponentStory<typeof DefaultAlert> = (args) => (
  <DefaultAlert {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
