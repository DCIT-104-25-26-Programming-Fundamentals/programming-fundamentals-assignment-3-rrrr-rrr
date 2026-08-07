const readlineSync = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function modulus(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function showMenu() {
  console.log("\n============================");
  console.log("     SIMPLE CALCULATOR");
  console.log("============================");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Exponentiation");
  console.log("7. Quit");
}

function getTwoNumbers() {
  const a = readlineSync.questionFloat("Enter first number : ");
  const b = readlineSync.questionFloat("Enter second number: ");
  return [a, b];
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt("Select an operation (1-7): ");

    let a, b, result;

    switch (choice) {
      case 1:
        [a, b] = getTwoNumbers();
        result = add(a, b);
        console.log(`Result: ${a} + ${b} = ${result.toFixed(2)}`);
        break;
      case 2:
        [a, b] = getTwoNumbers();
        result = subtract(a, b);
        console.log(`Result: ${a} - ${b} = ${result.toFixed(2)}`);
        break;
      case 3:
        [a, b] = getTwoNumbers();
        result = multiply(a, b);
        console.log(`Result: ${a} * ${b} = ${result.toFixed(2)}`);
        break;
      case 4:
        [a, b] = getTwoNumbers();
        result = divide(a, b);
        if (result === null) {
          console.log("Error: Cannot divide by zero.");
        } else {
          console.log(`Result: ${a} / ${b} = ${result.toFixed(2)}`);
        }
        break;
      case 5:
        [a, b] = getTwoNumbers();
        result = modulus(a, b);
        if (result === null) {
          console.log("Error: Cannot perform modulus by zero.");
        } else {
          console.log(`Result: ${a} % ${b} = ${result.toFixed(2)}`);
        }
        break;
      case 6:
        [a, b] = getTwoNumbers();
        result = exponent(a, b);
        console.log(`Result: ${a} ** ${b} = ${result.toFixed(2)}`);
        break;
      case 7:
        console.log("Goodbye!");
        running = false;
        break;
      default:
        console.log("Error: Invalid choice. Please select a number between 1 and 7.");
    }
  }
}

main();