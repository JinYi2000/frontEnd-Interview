/**
 *数组扁平化
 *
 * @param {Array} arr
 * @returns
 */
function flatten(arr) {
  if(!(arr instanceof Array)) return;
  return arr.toString().split(',').map(item=>Number(item));
}
const arr = [[1.2,2,3],[4,5],6];
console.log(flatten(arr));