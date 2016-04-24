function sumInputs({state, output, services}) {
  let todo = {
    $isSaving: true,
    title: state.get('app.new.title'),
    completed: false
  };

  state.set(`app.list.todos.${ref}`, todo);
  state.set('app.new.title', '');

  output({
    ref: ref
  });

};

export default sumInputs;
