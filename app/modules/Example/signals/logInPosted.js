import {redirect} from 'cerebral-module-router';

function postLogin({output, state, services}) {
  services.http.post('http://rethink-server.dev.azk.io/login', {
    email: state.get('example.logInUser.email'),
    password: state.get('example.logInUser.password'),
  })
  .then(output.success)
  .catch(output.error);
}

function saveToken({input, state}) {
  state.set(['example', 'logInUser', 'name'], input.result.name);
  state.set(['example', 'logInUser', 'email'], input.result.email);
  state.set(['example', 'logInUser', 'userToken'], input.result.token);
}

function clearLogInPassword({state}) {
  state.set(['example', 'logInUser', 'password'], null);
}

function setError({input, state}) {
  state.set(['example', 'logInUser', 'loginError'], input.result.error);
}

const logInPosted = [
  [
    postLogin,
    {
      success: [
        clearLogInPassword,
        saveToken,
        redirect('/phone-list'),
      ],
      error: [
        setError,
      ]
    }
  ],
];

export default logInPosted;
