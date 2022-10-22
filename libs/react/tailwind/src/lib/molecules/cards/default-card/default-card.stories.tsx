import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultCard } from './default-card';

const Story: ComponentMeta<typeof DefaultCard> = {
  component: DefaultCard,
  title: 'DefaultCard',
};
export default Story;

const Template: ComponentStory<typeof DefaultCard> = (args) => (
  <DefaultCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
