function findPrime() {
  let num = prompt('Put the damn number');
  let allPrime = 1;
  for (let counter = 2; counter <= num; counter++) {
    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
        allPrime += counter;
      }
    }
    if (notPrime === false) {
      allPrime += -counter;
    }
  }
  console.log(allPrime);
}
