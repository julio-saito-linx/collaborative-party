function setContent({state}) {
  state.set(['example', 'boxes'], null);
}

const contentCleared = [
  setContent,
];

export default contentCleared;
