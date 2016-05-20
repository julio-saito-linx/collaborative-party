import {SIGN_IN} from '../constants.js';

function setPage({state}) {
  state.set(['example', 'pageTitle'], SIGN_IN);
  state.set(['example', 'leftMenuButtonBack'], false);
}

const signInLoaded = [
  setPage,
];

export default signInLoaded;
