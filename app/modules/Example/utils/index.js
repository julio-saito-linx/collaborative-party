import _ from 'lodash';
import randomcolor from 'randomcolor';

export const createRandomColors = (randomsToCreate) => {
  const randomColors = _.times(randomsToCreate, () => {
    return randomcolor({format: 'rgbArray'});
  });
  return randomColors;
};

export const arrayToRgba = (arr, alpha) => {
  if (!arr || arr.length < 3) {
    return 'rgba(0, 0, 0, 1)';
  }
  const result = [];
  result.push('rgba(');
  result.push(arr[0]);
  result.push(', ');
  result.push(arr[1]);
  result.push(', ');
  result.push(arr[2]);
  result.push(', ');
  result.push(alpha || 1);
  result.push(')');
  return result.join('');
};
