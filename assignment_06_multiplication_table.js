const readlineSync = require('readline-sync');

function printSingleTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num}  x  ${i.toString().padEnd(2)}  =  ${num * i}`);
  }
}

function printTablesUpToN(n) {
  for (let num = 1; num <= n; num++) {
    printSingleTable(num);
    console.log("---------------------------");
  }
}

function partA() {
  console.log("--- PART A: Single Table ---");
  const num = readlineSync.questionInt("Enter a number: ");
  printSingleTable(num);
}

function partB() {
  console.log("\n--- PART B: Bonus - Tables from 1 to N ---");
  const n = readlineSync.questionInt("Enter a number N: ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  printTablesUpToN(n);
}

function main() {
  partA();
  partB();
}

main();