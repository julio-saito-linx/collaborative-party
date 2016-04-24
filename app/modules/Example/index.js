import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';
import addMoreColorsClicked from './signals/addMoreColorsClicked';
import { createRandomColors } from './utils';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      title: 'You can change the url too!',
      color: '#333',
      buttonColors: createRandomColors(5),
    });

    module.addSignals({
      colorChanged,
      redirectRoot,
      addMoreColorsClicked,
    });
  };
};
