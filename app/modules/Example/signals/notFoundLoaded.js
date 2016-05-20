import {PAGE_NOT_FOUND} from '../constants.js';

function setNotFound({state}) {
  state.set(['example', 'pageTitle'], PAGE_NOT_FOUND);
  state.set(['example', 'leftMenuButtonBack'], false);
}

const notFoundLoaded = [
  setNotFound,
];

export default notFoundLoaded;
