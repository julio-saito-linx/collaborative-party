function setSelectedUser({input, state}) {
  // get full user by ID
  const fullUser = state.get(`example.usersList.${input.user.id}`);
  state.set(['example', 'selectedUser'], fullUser);
  state.set(['example', 'pageTitle'], fullUser.name);
}

const phoneItemSelected = [
  setSelectedUser,
];

export default phoneItemSelected;
