'use strict';

const quicksort = require('./quicksort');

let numericArray = [8,7,5,4,3,6,1];

let sortedArray = quicksort(numericArray);

console.log(numericArray, sortedArray);
