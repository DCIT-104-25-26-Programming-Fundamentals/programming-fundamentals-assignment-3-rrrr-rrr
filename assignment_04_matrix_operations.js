 const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label) {
  const matrix = [];
  console.log(`\nEnter values for Matrix ${label} (${rows}x${cols}):`);
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.trim().split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowStr = "";
    for (let j = 0; j < matrix[i].length; j++) {
      rowStr += matrix[i][j].toString().padStart(5);
    }
    console.log(rowStr);
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function partA() {
  console.log("\n--- PART A: Transpose a Matrix ---");
  const rows = readlineSync.questionInt("Enter number of rows: ");
  const cols = readlineSync.questionInt("Enter number of columns: ");
  const matrix = readMatrix(rows, cols, "");

  console.log("\nOriginal Matrix:");
  displayMatrix(matrix);

  const transposed = transposeMatrix(matrix);
  console.log("\nTransposed Matrix:");
  displayMatrix(transposed);
}

function partB() {
  console.log("\n--- PART B: Add Two Matrices ---");
  const rows = readlineSync.questionInt("Enter number of rows: ");
  const cols = readlineSync.questionInt("Enter number of columns: ");

  const matrixA = readMatrix(rows, cols, "A");
  const matrixB = readMatrix(rows, cols, "B");

  const sum = addMatrices(matrixA, matrixB);

  console.log("\nMatrix A:");
  displayMatrix(matrixA);
  console.log("\nMatrix B:");
  displayMatrix(matrixB);
  console.log("\nSum (A + B):");
  displayMatrix(sum);
}

function partC() {
  console.log("\n--- PART C: Multiply Two Matrices ---");
  const rowsA = readlineSync.questionInt("Enter number of rows for Matrix A: ");
  const colsA = readlineSync.questionInt("Enter number of columns for Matrix A (= rows of B): ");
  const colsB = readlineSync.questionInt("Enter number of columns for Matrix B: ");

  const matrixA = readMatrix(rowsA, colsA, "A");
  const matrixB = readMatrix(colsA, colsB, "B");

  const product = multiplyMatrices(matrixA, matrixB);

  console.log("\nMatrix A:");
  displayMatrix(matrixA);
  console.log("\nMatrix B:");
  displayMatrix(matrixB);
  console.log("\nProduct (A x B):");
  displayMatrix(product);
}

function main() {
  partA();
  partB();
  partC();
}

main();