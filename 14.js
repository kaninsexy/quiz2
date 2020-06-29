function factorial(n) {
  let sumall = 1;
  let sum = [];
  for (let i = 2; i <= n - 1; i++) {
    sumall *= i;
  }

  sum.push(sumall);
  let allsum = 0;
  for (let i = 0; i < sum.length; i++) {
    y = sum[i].toString();
    z = [...y];

    for (let y = 0; y < z.length; y++) {
      allsum += Number(z[y]);
    }
  }
  return allsum;
}
