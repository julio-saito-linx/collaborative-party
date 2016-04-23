import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/ColorChanger/.stories');
  require('../app/components/ColorChanger/Title/.stories');
  require('../app/components/SimpleInput/.stories');
  // require as many stories as you need.
}

configure(loadStories, module);
