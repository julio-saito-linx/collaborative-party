import {PAGE_NOT_FOUND} from '../constants.js';

function setNotFound({state}) {
  state.set(['example', 'pageTitle'], PAGE_NOT_FOUND);
}

const notFoundLoaded = [
  setNotFound,
];

export default notFoundLoaded;
