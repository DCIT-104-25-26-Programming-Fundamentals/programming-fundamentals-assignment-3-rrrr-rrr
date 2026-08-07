const readlineSync = require('readline-sync');

function printFibonacciTerms(n) {
  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  console.log("Fibonacci sequence: " + sequence.join(' '));
}

function isFibonacciNumber(num) {
  let a = 0;
  let b = 1;

  if (num === a) {
    return true;
  }

  while (a <= num) {
    if (a === num) {
      return true;
    }
    const next = a + b;
    a = b;
    b = next;
  }

  return false;
}

function partA() {
  console.log("\n--- PART A: Print the First N Terms ---");
  const n = readlineSync.questionInt("How many terms? ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  printFibonacciTerms(n);
}

function partB() {
  console.log("\n--- PART B: Check if a Number Belongs to the Sequence ---");
  const num = readlineSync.questionInt("Enter a number to check: ");

  if (isFibonacciNumber(num)) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }
}

function main() {
  partA();
  partB();
}

main();