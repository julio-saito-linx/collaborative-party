import _ from 'lodash';
import randomcolor from 'randomcolor';

export const createRandomColors = (randomsToCreate) => {
  const randomColors = _.times(randomsToCreate, () => {
    return randomcolor();
  });
  return randomColors;
};
