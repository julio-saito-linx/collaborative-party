import React from 'react';

function setContent({state}) {
  state.set(['example', 'jumboTitle'], 'New Page');
  state.set(['example', 'jumboSubtitle'], 'new subtitle');

  state.set(['example', 'boxes'], [
    {
      label: 'col 1',
      text: <i className="fa fa-5x fa-hand-o-up" aria-hidden="true" />,
    },
    {
      label: 'col 2',
      text: <i className="fa fa-5x fa-hand-o-right" aria-hidden="true" />,
    },
    {
      label: 'col 3',
      text: <i className="fa fa-5x fa-hand-o-down" aria-hidden="true" />,
    },
    {
      label: 'col 4',
      text: <i className="fa fa-5x fa-hand-o-left" aria-hidden="true" />,
    },
  ]);
}

const newContentLoaded = [
  setContent,
];

export default newContentLoaded;
