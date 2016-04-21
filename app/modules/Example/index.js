import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      title: 'You can change the url too!',
      color: '#333'
    });

    module.addSignals({
      colorChanged,
      redirectRoot
    });
  };
};
