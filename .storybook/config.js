import { configure } from '@storybook/polymer';

function loadStories() {
  require('../stories/visual.ts');
  require('../stories/button.ts');
  require('../stories/card.ts');
  require('../stories/tabs.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);