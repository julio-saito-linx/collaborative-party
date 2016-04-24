export default function setSelectedColor({input, state}) {
  state.set(['example', 'selectedColor'], input.color);
}
