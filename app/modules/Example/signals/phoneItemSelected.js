function setSelectedUser({input, state}) {
  // get full user by ID
  const fullUser = state.get(`example.usersList.${input.user.id}`);
  state.set(['example', 'selectedUser'], fullUser);
}

const phoneItemSelected = [
  setSelectedUser,
];

export default phoneItemSelected;
