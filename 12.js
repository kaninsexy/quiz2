function mul() {
  let allNum = [];

  for (let i = 1; i * 3 < 1000; i++) {
    allNum.push(i * 3);
  }
  for (let i = 1; i * 5 < 1000; i++) {
    allNum.push(i * 5);
  }
  for (let i = 1; i * 5 * 3 < 1000; i++) {
    allNum.push(i * 5 * 3);
  }
  allNum = new Set(allNum);
  allNum = [...allNum];
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return allNum.reduce(reducer);
}
