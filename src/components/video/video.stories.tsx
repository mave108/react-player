import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Video } from './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Video',
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp5',
};
