import {PHONE_DETAIL} from '../constants.js';

function setSelectedUser({input, state}) {
  // get full user by ID
  const fullUser = state.get(`example.usersList.${input.user.id}`);
  state.set(['example', 'selectedUser'], fullUser);
  state.set(['example', 'pageTitle'], PHONE_DETAIL);
}

const phoneItemSelected = [
  setSelectedUser,
];

export default phoneItemSelected;
