function sumstring(a, b) {
  let sum = [a, b];
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
