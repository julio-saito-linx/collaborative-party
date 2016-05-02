import {redirect} from 'cerebral-module-router';

function postNewUser({state, output, services}) {
  services.http.post('http://rethink-server.dev.azk.io/users', {
    name: state.get('example.signInUser.name'),
    email: state.get('example.signInUser.email'),
    password: state.get('example.signInUser.password'),
  })
  .then(output.success)
  .catch(output.error);
}

function clearSignInUser({state}) {
  state.set(['example', 'signInUser'], null);
}

function saveToken({input, state}) {
  state.set(['example', 'userToken'], input.result.generated_keys[0]);
}

const signInPosted = [
  [
    postNewUser,
    {
      success: [
        saveToken,
        clearSignInUser,
        redirect('/phone-list'),
      ],
    }
  ],
];

export default signInPosted;
