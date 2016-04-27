function setNotFound({state}) {
  state.set(['example', 'pageName'], 'notFound404');
}

const notFoundLoaded = [
  setNotFound,
];

export default notFoundLoaded;
