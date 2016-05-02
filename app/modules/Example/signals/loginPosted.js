function postLogin({output, services}) {
  services.http.post('http://rethink-server.dev.azk.io/login', {
    email: 'saitodisse@gmail.com',
    password: '123'
  })
    .then(output.success)
    .catch(output.error);
}

function showResult({input, state}) {
  // convert array to object
  // const objectWithItens = input.result.reduce((prev, curr) => {
  //   // object key is the user ID
  //   prev[`${curr.id}`] = curr;
  //   return prev;
  // }, {});
  // state.set(['example', 'usersList'], objectWithItens);
}

const loginPosted = [
  [
    postLogin,
    {
      success: [showResult]
    }
  ],
];

export default loginPosted;
