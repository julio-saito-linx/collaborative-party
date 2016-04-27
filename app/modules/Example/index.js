import homepageLoaded from './signals/homepageLoaded';
import pageALoaded from './signals/pageALoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      layoutColor: '#dff',
      pageName: 'pageA',
    });

    module.addSignals({
      homepageLoaded,
      pageALoaded,
      redirectHome,
      notFoundLoaded,
    });
  };
};
