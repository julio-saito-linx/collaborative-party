import React from 'react';
import homepageLoaded from './signals/homepageLoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';
import titleChanged from './signals/titleChanged';
import newContentLoaded from './signals/newContentLoaded';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      layoutColor: '#dff',
      pageName: 'home',
      titleContent: 'Cerebral Router',
      jumboTitle: '',
      jumboSubtitle: '',
      boxes: [],
    });

    module.addSignals({
      homepageLoaded,
      redirectHome,
      notFoundLoaded,
      titleChanged,
      newContentLoaded,
    });
  };
};
