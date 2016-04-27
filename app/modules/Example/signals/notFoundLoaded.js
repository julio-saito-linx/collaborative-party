function setNotFound({state}) {
  state.set(['example', 'pageName'], 'notFound404');
}

export default [
  setNotFound,
];
