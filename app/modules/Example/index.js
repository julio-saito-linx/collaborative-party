import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';
import randomcolor from 'randomcolor';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      title: 'You can change the url too!',
      color: '#333',
      buttonColors: [randomcolor(), randomcolor(), randomcolor(), randomcolor(), randomcolor()],
    });

    module.addSignals({
      colorChanged,
      redirectRoot
    });
  };
};
