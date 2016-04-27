function setContent({state}) {
  state.set(['example', 'jumboTitle'], 'New Page');
  state.set(['example', 'jumboSubtitle'], 'new subtitle');
  state.set(['example', 'boxes'], [
    {
      label: 'new label 1',
      text: 'new text 1',
    },
    {
      label: 'new label 2',
      text: 'new text 2',
    },
    {
      label: 'new label 3',
      text: 'new text 3',
    },
    {
      label: 'new label 4',
      text: 'new text 4',
    },
  ]);
}

const newContentLoaded = [
  setContent,
];

export default newContentLoaded;
