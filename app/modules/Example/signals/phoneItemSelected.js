import {PHONE_DETAIL} from '../constants.js';

function setSelectedUser({input, state}) {
  // get full user by ID
  const fullUser = state.get(`example.phoneList.${input.user.id}`);
  state.set(['example', 'selectedPhoneItem'], fullUser);
  state.set(['example', 'pageTitle'], PHONE_DETAIL);
  state.set(['example', 'leftMenuButtonBack'], true);
}

const phoneItemSelected = [
  setSelectedUser,
];

export default phoneItemSelected;
