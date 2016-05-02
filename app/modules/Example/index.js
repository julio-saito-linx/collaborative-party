import React from 'react';
import homepageLoaded from './signals/homepageLoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';
import httpGetRequested from './signals/httpGetRequested';
import phoneItemSelected from './signals/phoneItemSelected';
import backToListClicked from './signals/backToListClicked';
import signInLoaded from './signals/signInLoaded';
import signInUserChanged from './signals/signInUserChanged';
import signInPosted from './signals/signInPosted';
import loginLoaded from './signals/loginLoaded';
import loginPosted from './signals/loginPosted';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      openDialog: false,
      pageTitle: '',
      usersList: {},
      selectedId: null,
      selectedUser: null,
    });

    module.addSignals({
      homepageLoaded,
      redirectHome,
      notFoundLoaded,
      httpGetRequested,
      phoneItemSelected,
      backToListClicked,
      signInLoaded,
      signInUserChanged,
      signInPosted,
      loginLoaded,
      loginPosted,
    });
  };
};
