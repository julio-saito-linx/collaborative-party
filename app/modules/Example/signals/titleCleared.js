function setContent({state}) {
  state.set(['example', 'jumboTitle'], null);
  state.set(['example', 'jumboSubtitle'], null);
}

const titleCleared = [
  setContent,
];

export default titleCleared;
