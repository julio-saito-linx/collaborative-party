function setPageTitle({state}) {
  state.set(['example', 'pageTitle'], 'Phone List');
}

const backToListClicked = [
  setPageTitle,
];

export default backToListClicked;
