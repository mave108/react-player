import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Player } from './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Player',
  component: Player,
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
};
