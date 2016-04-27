export default function setPageName({input, state}) {
  state.set(['example', 'pageName'], input.pageName);
}
