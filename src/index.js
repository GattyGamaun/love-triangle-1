/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let temp1;
  let temp2;
  let temp3;
  let index1;
  let index2;
  let index3;
  let count = 0;
  let length = preferences.length;
  const indexes = new Array(length);
    
  for (let i = 0; i < length; i++) {
    indexes[i] = i + 1;
  }

  for (let i = 0; i < length; i++) {

    temp1 = preferences[i];
    temp2 = preferences[temp1 - 1];
    temp3 = preferences[temp2 - 1];

    index1 = indexes[i];
    index2 = indexes[temp1 - 1];
    index3 = indexes[temp2 - 1];

    if (temp3 === index1 && temp1 !== index1) {
      count++;
      preferences[index1 - 1] = null;
      preferences[index2 - 1] = null;
      preferences[index3 - 1] = null;

    }
  }
  return count;
};
