function setDialogClose({state}) {
  state.set(['example', 'openDialog'], false);
}

const dialogCloseRequested = [
  setDialogClose,
];

export default dialogCloseRequested;
