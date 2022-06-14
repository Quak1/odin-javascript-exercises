const palindromes = function (text) {
  text = text.toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~() ]/g, "");

  const size = text.length;
  const iter = (size / 2).toFixed();
  for (let i = 0; i < iter; i++) {
    if (text[i] !== text[size - 1 - i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
