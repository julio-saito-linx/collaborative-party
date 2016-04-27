function setHomepage({state}) {
  state.set(['example', 'pageName'], 'home');
}
function setHomepageContent({state}) {
  state.set(['example', 'jumboTitle'], 'Home');
  state.set(['example', 'jumboSubtitle'], 'all content came from cerebral state');
  state.set(['example', 'boxes'], [
    {
      label: 'col 1',
      text: 'text 1',
    },
    {
      label: 'col 2',
      text: 'text 2',
    }
  ]);
}

const homepageLoaded = [
  setHomepage,
  setHomepageContent,
];

export default homepageLoaded;
