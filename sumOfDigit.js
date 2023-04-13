let number = 1234;
let sum = 0;

let iteration = 1;

while (number > 0) {
  console.log("BEFORE");
  console.log("number : " + number);
  console.log("iteration : " + iteration);

  let digit = number % (iteration * 10);
  digit = digit / iteration;
  sum = sum + digit;
  number = number - digit * iteration;
  iteration = iteration * 10;

  console.log(" ");
  console.log("AFTER");
  console.log("number : " + number);
  console.log("digit : " + digit);
  console.log("sum : " + sum);
  console.log(" ");
  console.log("***************************");
  console.log(" ");
}

console.log(sum);
