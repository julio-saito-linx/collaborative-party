import React from 'react';

function changeTitle({input, state}) {
  state.set(['example', 'titleContent'], input.newTitleContent || 'No title');
}

const titleChanged = [
  changeTitle,
];

export default titleChanged;
