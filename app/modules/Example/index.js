import goHome from './signals/goHome';
import pageALoaded from './signals/pageALoaded';
import go404 from './signals/go404';
import redirectTo404 from './signals/redirectTo404';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      currentPage: '',
      layoutColor: '#dff',
      pageName: 'PageA',
    });

    module.addSignals({
      goHome,
      pageALoaded,
      go404,
      redirectTo404,
    });
  };
};
