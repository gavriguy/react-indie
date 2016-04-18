import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/api.js');
  require('../stories/weather.js');
  // require as many stories as you need.
}

configure(loadStories, module);
