function setField({input, state}) {
  state.set(['example', 'signInUser', input.fieldName], input.value);
}

const signInUserChanged = [
  setField,
];

export default signInUserChanged;
