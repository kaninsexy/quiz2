function sort() {
  let num = [];
  let x;
  let sort = prompt('true will sort from low to high vice versa');
  while (x !== 'stop') {
    x = prompt('type stop to stop');
    if (!isNaN(x)) {
      num.push(Number(x));
    }
  }
  if (sort == 'true') {
    for (let i = 1; i < num.length; i++)
      for (let j = 0; j < i; j++)
        if (num[i] < num[j]) {
          let x = num[i];
          num[i] = num[j];
          num[j] = x;
        }
  }
  if (sort == 'false') {
    for (let i = 1; i < num.length; i++)
      for (let j = 0; j < i; j++)
        if (num[i] > num[j]) {
          let x = num[i];
          num[i] = num[j];
          num[j] = x;
        }
  }
  return num;
}
