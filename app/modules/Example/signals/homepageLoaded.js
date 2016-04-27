function setHomepage({state}) {
  state.set(['example', 'pageName'], 'home');
}
function setHomepageContent({state}) {
  state.set(['example', 'jumboTitle'], 'Home');
  state.set(['example', 'jumboSubtitle'], 'home subtitle');
  state.set(['example', 'boxes'], [
    {
      label: 'label 1',
      text: 'text 1',
    },
    {
      label: 'label 2',
      text: 'text 2',
    }
  ]);
}

const homepageLoaded = [
  setHomepage,
  setHomepageContent,
];

export default homepageLoaded;
