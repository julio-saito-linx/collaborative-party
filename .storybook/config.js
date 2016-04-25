import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/modules/Example/components/ColorChanger/.stories');
  require('../app/modules/Example/components/ColorChanger/Title/.stories');
  require('../app/modules/Example/components/ColorChanger/ButtonColorChanger/.stories');
  require('../app/modules/Example/components/ColorChanger/DynamicButtonsColorChanger/.stories');
  require('../app/modules/Example/components/ColorChanger/AddColorButton/.stories');
  require('../app/modules/Example/components/ColorChanger/Button/.stories');
  // require as many stories as you need.
}

configure(loadStories, module);
