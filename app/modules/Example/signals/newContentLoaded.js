function setContent({state}) {
  state.set(['example', 'jumboTitle'], 'New Page');
  state.set(['example', 'jumboSubtitle'], 'new subtitle');
  state.set(['example', 'boxes'], [
    {
      label: 'col 1',
      text: 'new text 1',
    },
    {
      label: 'col 2',
      text: 'new text 2',
    },
    {
      label: 'col 3',
      text: 'new text 3',
    },
    {
      label: 'col 4',
      text: 'new text 4',
    },
  ]);
}

const newContentLoaded = [
  setContent,
];

export default newContentLoaded;
