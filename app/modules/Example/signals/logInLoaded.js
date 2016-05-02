import {LOG_IN} from '../constants.js';

function setPage({state}) {
  state.set(['example', 'pageTitle'], LOG_IN);
}

const logInLoaded = [
  setPage,
];

export default logInLoaded;
