import { addParameters, configure } from '@storybook/polymer';
import UTU from './utu';

addParameters({
  options: {
    theme: UTU,
  },
});

function loadStories() {
  require('../stories/visual.ts');
  require('../stories/button.ts');
  require('../stories/card.ts');
  require('../stories/datepicker.ts');
  // require('../stories/navbar.ts');
  require('../stories/switch.ts');
  require('../stories/tabs.ts');
}

configure(loadStories, module);