import React from 'react';
import homepageLoaded from './signals/homepageLoaded';
import pageALoaded from './signals/pageALoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';
import titleChanged from './signals/titleChanged';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      layoutColor: '#dff',
      pageName: 'pageA',
      titleContent: 'Cerebral Router',
    });

    module.addSignals({
      homepageLoaded,
      pageALoaded,
      redirectHome,
      notFoundLoaded,
      titleChanged,
    });
  };
};
