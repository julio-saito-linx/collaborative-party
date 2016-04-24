import mounted from './signals/mounted';
import input1Changed from './signals/input1Changed';
import input2Changed from './signals/input2Changed';
import submitted from './signals/submitted';

export default (_options = {}) => {
  return (module) => {
    module.addState({
      input1Text: '',
      input2Text: '',
      result: '',
      isSaving: false
    });

    module.addSignals({
      mounted,
      input1Changed,
      input2Changed,
      submitted
    });
  };
};
