export default function addColor({input, state}) {
  state.push('example.buttonColors', {
    $ref: input.$ref,
    color: input.color,
  });
}
