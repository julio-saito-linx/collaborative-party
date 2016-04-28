function setHomepage({state}) {
  state.set(['example', 'pageName'], 'home');
}
function setHomepageContent({state}) {
  state.set(['example', 'openDialog'], false);
}

const homepageLoaded = [
  setHomepage,
  setHomepageContent,
];

export default homepageLoaded;
