function getData({output, services}) {
  services.http.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(output.success)
    .catch(output.error);
}

function setData({input, state}) {
  state.set(['example', 'userId'], input.result.userId);
  state.set(['example', 'id'], input.result.id);
  state.set(['example', 'title'], input.result.title);
  state.set(['example', 'body'], input.result.body);
  /**/console.log('input:', input);/* -debug- */
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
