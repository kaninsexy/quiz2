let gcd = function (a, b, c) {
  let allGCD = [a, b, c];
  for (let i = 0; i <= 2; i++) {
    if (!allGCD[i + 1]) {
      return allGCD[i];
    }

    return gcd(allGCD[i + 1], allGCD[i] % allGCD[i + 1]);
  }
};
