export default function removeItem({input, state}) {
  state.unset(`example.buttonColors.${input.ref}`);
}
