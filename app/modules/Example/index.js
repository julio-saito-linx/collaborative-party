import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';
import addMoreColorsClicked from './signals/addMoreColorsClicked';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      title: 'You can change the url too!',
      selectedColor: [0, 0, 0],
      buttonColors: [],
    });

    module.addSignals({
      colorChanged,
      redirectRoot,
      addMoreColorsClicked,
    });
  };
};
