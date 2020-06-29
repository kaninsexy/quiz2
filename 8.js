function gcd2(a, b) {
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
}

function lcm2(a, b) {
  return (a * b) / gcd2(a, b);
}
function lcm(array) {
  let n = 1;
  for (let i = 0; i < array.length; ++i) n = lcm2(array[i], n);
  return n;
}
