import {PHONE_LIST} from '../constants.js';

function setPageTitle({state}) {
  state.set(['example', 'pageTitle'], PHONE_LIST);
}

const backToListClicked = [
  setPageTitle,
];

export default backToListClicked;
