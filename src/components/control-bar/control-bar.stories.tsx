import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ControlBar } from './index';
import { PlayToggle } from '../play-toggle';
import { StoreProvider } from '../../store/store';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ControlBar',
  component: ControlBar,
} as ComponentMeta<typeof ControlBar>;

const Template: ComponentStory<typeof ControlBar> = (args) => <ControlBar {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  children: (
    <StoreProvider>
      <PlayToggle />
    </StoreProvider>
  ),
};
