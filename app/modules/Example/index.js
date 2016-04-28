import React from 'react';
import homepageLoaded from './signals/homepageLoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';
import dialogOpenRequested from './signals/dialogOpenRequested';
import dialogCloseRequested from './signals/dialogCloseRequested';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      openDialog: false,
    });

    module.addSignals({
      homepageLoaded,
      redirectHome,
      notFoundLoaded,
      dialogOpenRequested,
      dialogCloseRequested,
    });
  };
};
