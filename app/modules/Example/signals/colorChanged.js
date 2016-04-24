import createRandomColor from './../actions/createRandomColor.js';
import addColor from './../actions/addColor.js';
import setSelectedColor from './../actions/setSelectedColor.js';
import copy from 'cerebral-addons/copy';

export default [
  createRandomColor,
  addColor,
  setSelectedColor,
  // copy('input:/selectedColor', 'state:/example.selectedColor')
];
