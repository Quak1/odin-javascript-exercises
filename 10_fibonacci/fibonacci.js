const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;

  let a = 0;
  let b = 1;
  let c, i;

  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
