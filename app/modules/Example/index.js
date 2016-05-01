import React from 'react';
import homepageLoaded from './signals/homepageLoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';
import dialogOpenRequested from './signals/dialogOpenRequested';
import dialogCloseRequested from './signals/dialogCloseRequested';
import httpGetRequested from './signals/httpGetRequested';
import phoneItemSelected from './signals/phoneItemSelected';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      openDialog: false,
      usersList: {},
      selectedId: null,
      selectedUser: null,
    });

    module.addSignals({
      homepageLoaded,
      redirectHome,
      notFoundLoaded,
      dialogOpenRequested,
      dialogCloseRequested,
      httpGetRequested,
      phoneItemSelected,
    });
  };
};
