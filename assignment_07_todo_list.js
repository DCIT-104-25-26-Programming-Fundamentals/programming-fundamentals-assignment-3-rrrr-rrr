const readlineSync = require('readline-sync');

let tasks = [];

function addTask() {
  const task = readlineSync.question("Enter task: ");
  tasks.push(task);
  console.log(`Task added: "${task}"`);
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log("Your task list is empty.");
    return;
  }

  console.log("Your Tasks:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

function deleteTask() {
  if (tasks.length === 0) {
    console.log("Your task list is empty. Nothing to delete.");
    return;
  }

  viewTasks();
  const taskNum = readlineSync.questionInt("Enter task number to delete: ");
  const index = taskNum - 1;

  if (index < 0 || index >= tasks.length) {
    console.log("Error: Invalid task number.");
    return;
  }

  const removed = tasks[index];
  tasks.splice(index, 1);
  console.log(`Task "${removed}" has been removed.`);
}

function showMenu() {
  console.log("\n============================");
  console.log("     TO-DO LIST MENU");
  console.log("============================");
  console.log("1. Add task");
  console.log("2. View tasks");
  console.log("3. Delete task");
  console.log("4. Quit");
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt("Enter your choice (1-4): ");

    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        viewTasks();
        break;
      case 3:
        deleteTask();
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