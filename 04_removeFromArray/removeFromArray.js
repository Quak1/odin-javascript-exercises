const removeFromArray = function(array, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    array = array.filter(entry => entry !== elements[i])
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
