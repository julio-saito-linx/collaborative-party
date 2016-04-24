import randomcolor from 'randomcolor';

function createRandomColor({output}) {
  output({
    newColor: randomcolor()
  });
}

function addRandomColor({input, state}) {
  state.push('example.buttonColors', input.newColor);
}

export default [
  createRandomColor,
  addRandomColor,
];
