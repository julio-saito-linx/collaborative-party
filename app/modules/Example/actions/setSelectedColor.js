export default function setSelectedColor({input, state}) {
  state.set(['example', 'selectedColor'], {
    $ref: input.$ref,
    color: input.color
  });
}
