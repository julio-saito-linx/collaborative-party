export default function setSelectedColor({input, state}) {
  if (typeof input.color === 'string') {
    const arr = input.color.split('-');
    const arrNumbers = arr.map(x => Number(x));
    return state.set(['example', 'selectedColor'], arrNumbers);
  }

  return state.set(['example', 'selectedColor'], input.color);
}
