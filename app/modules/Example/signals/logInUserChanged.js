function setField({input, state}) {
  state.set(['example', 'logInUser', input.fieldName], input.value);
}

const logInUserChanged = [
  setField,
];

export default logInUserChanged;
