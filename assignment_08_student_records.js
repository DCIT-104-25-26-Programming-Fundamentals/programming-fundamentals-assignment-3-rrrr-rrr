const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function addStudent() {
  const name = readlineSync.question("Student name: ");
  const id = readlineSync.questionInt("Student ID: ");
  const numScores = readlineSync.questionInt("How many scores? ");

  const scores = [];
  for (let i = 0; i < numScores; i++) {
    const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
    scores.push(score);
  }

  const student = { name: name, id: id, scores: scores };
  students.push(student);

  console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
  if (students.length === 0) {
    console.log("No students have been added yet.");
    return;
  }

  console.log("\n--- All Students ---");
  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    const avg = calculateAverage(s.scores);
    console.log(`Name: ${s.name}`);
    console.log(`ID: ${s.id}`);
    console.log(`Scores: ${s.scores.join(', ')}`);
    console.log(`Average: ${avg.toFixed(2)}`);
    console.log("---------------------------");
  }
}

function calculateAverageForStudent() {
  const id = readlineSync.questionInt("Enter student ID: ");

  let found = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      found = students[i];
      break;
    }
  }

  if (found === null) {
    console.log("Error: Student ID not found.");
    return;
  }

  const avg = calculateAverage(found.scores);
  console.log(`${found.name}'s average score: ${avg.toFixed(2)}`);
}

function showMenu() {
  console.log("\n================================");
  console.log("   STUDENT RECORD SYSTEM MENU");
  console.log("================================");
  console.log("1. Add student");
  console.log("2. Display all students");
  console.log("3. Calculate average score");
  console.log("4. Quit");
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt("Enter your choice (1-4): ");

    switch (choice) {
      case 1:
        addStudent();
        break;
      case 2:
        displayAllStudents();
        break;
      case 3:
        calculateAverageForStudent();
        break;
      case 4:
        console.log("Goodbye!");
        running = false;
        break;
      default:
        console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
    }
  }
}

main();