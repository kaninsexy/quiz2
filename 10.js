function sort() {
  let num = [];
  let i;
  let sort = prompt('true will sort from low to high vice versa');
  while (i !== 'stop') {
    i = prompt('type stop to stop');
    if (!isNaN(i)) {
      num.push(Number(i));
    }
  }
  if (sort == 'true') {
    num.sort((a, b) => a - b);
  }
  if (sort == 'false') {
    num.sort((a, b) => b - a);
  }

  return num;
}
