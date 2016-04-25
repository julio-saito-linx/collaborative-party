export default function addColor({input, state}) {
  const color = {
    $ref: input.$ref,
    color: input.color,
  };

  state.set(`example.buttonColors.${input.$ref}`, color);
}
