import {USERS_LIST} from '../constants.js';

function setHomepageContent({state}) {
  state.set(['example', 'openDialog'], false);
  state.set(['example', 'pageTitle'], USERS_LIST);
  state.set(['example', 'leftMenuButtonBack'], false);
}
function getData({output, state, services}) {
  services.http.get('http://rethink-server.dev.azk.io/users/', {
    headers: {
      'x-api-token': state.get('example.signInUser.userToken')
    }
  })
  .then(output.success)
  .catch(output.error);
}

function setData({input, state}) {
  // convert array to object
  const objectWithItens = input.result.reduce((prev, curr) => {
    // object key is the user ID
    prev[`${curr.id}`] = curr;
    return prev;
  }, {});
  state.set(['example', 'phoneList'], objectWithItens);
}

const phoneListLoaded = [
  setHomepageContent,
  [
    getData,
    {
      success: [setData]
    }
  ],
];

export default phoneListLoaded;
