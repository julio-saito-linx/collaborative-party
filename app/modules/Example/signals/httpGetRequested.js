function getData({output, services}) {
  services.http.get('http://jsonplaceholder.typicode.com/users')
    .then(output.success)
    .catch(output.error);
}

function setData({input, state}) {
  state.set(['example', 'usersList'], input.result);
}

const httpGetRequested = [
  [
    getData,
    {
      success: [setData]
    }
  ],
];

export default httpGetRequested;
