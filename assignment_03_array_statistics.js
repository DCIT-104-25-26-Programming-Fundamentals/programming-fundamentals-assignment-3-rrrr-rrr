const readlineSync = require('readline-sync');

function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function calculateAverage(numbers) {
  return calculateSum(numbers) / numbers.length;
}

function findMaximum(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function findMinimum(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt("How many numbers? ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    const num = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(num);
  }

  console.log("\nResults:");
  console.log(`Sum:     ${calculateSum(numbers)}`);
  console.log(`Average: ${calculateAverage(numbers)}`);
  console.log(`Maximum: ${findMaximum(numbers)}`);
  console.log(`Minimum: ${findMinimum(numbers)}`);
}

main();