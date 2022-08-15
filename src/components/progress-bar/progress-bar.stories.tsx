import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './internals';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  progress: 50,
};
