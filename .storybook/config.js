import { configure } from '@storybook/polymer';

function loadStories() {
  require('../stories/visual.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);