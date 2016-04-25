import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';
import addMoreColorsClicked from './signals/addMoreColorsClicked';
import removeItemClicked from './signals/removeItemClicked';
import removeAllItemsClicked from './signals/removeAllItemsClicked';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      title: 'You can change the url too!',
      selectedColor: [0, 0, 0],
      buttonColors: {},
    });

    module.addSignals({
      colorChanged,
      redirectRoot,
      addMoreColorsClicked,
      removeItemClicked,
      removeAllItemsClicked,
    });
  };
};
