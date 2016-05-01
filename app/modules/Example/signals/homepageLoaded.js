function setHomepage({state}) {
  state.set(['example', 'pageName'], 'home');
}
function setHomepageContent({state}) {
  state.set(['example', 'openDialog'], false);
}
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
  state.set(['example', 'usersList'], objectWithItens);
}

const homepageLoaded = [
  setHomepage,
  setHomepageContent,
  [
    getData,
    {
      success: [setData]
    }
  ],
];

export default homepageLoaded;
