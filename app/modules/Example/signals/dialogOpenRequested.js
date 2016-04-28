function setDialogOpen({state}) {
  state.set(['example', 'openDialog'], true);
}

const dialogOpenRequested = [
  setDialogOpen,
];

export default dialogOpenRequested;
