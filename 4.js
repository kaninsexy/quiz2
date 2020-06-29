function findPrime() {
  let num = prompt('Put the damn number');
  let allPrime = 0;
  for (let counter = 2; counter <= num; counter++) {
    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      allPrime += counter;
    }
  }
  console.log(allPrime);
}
