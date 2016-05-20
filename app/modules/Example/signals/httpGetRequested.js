function getData({output, services}) {
  services.http.get('http://jsonplaceholder.typicode.com/users')
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

const httpGetRequested = [
  [
    getData,
    {
      success: [setData]
    }
  ],
];

export default httpGetRequested;
