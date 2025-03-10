let tasks = []; // Array to store tasks
let taskIdCounter = 1; // Counter to generate unique task IDs

// Function to add a new task
function addTask(name, description) {
  const newTask = {
    id: taskIdCounter++, // Assign a unique ID to the task
    name, // Task name
    description, // Task description
  };
  tasks.push(newTask); // Add the task to the tasks array
  return newTask; // Return the newly created task
}

// Function to view all tasks
function viewTasks() {
  return tasks; // Return the tasks array
}

// Function to update a task
function updateTask(id, name, description) {
  const task = tasks.find(task => task.id === id); // Find the task by ID
  if (task) {
    task.name = name; // Update the task name
    task.description = description; // Update the task description
    return task; // Return the updated task
  }
  return null; // Return null if the task is not found
}

// Function to delete a task
function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id); // Find the index of the task by ID
  if (index !== -1) {
    tasks.splice(index, 1); // Remove the task from the array
    return true; // Return true if the task was deleted
  }
  return false; // Return false if the task was not found
}

// Example usage and testing:
addTask('Buy groceries', 'Milk, eggs, bread');
addTask('Do laundry', 'Wash clothes');
console.log(viewTasks());

updateTask(1, 'Buy groceries', 'Milk, eggs, bread, and fruits');
console.log(viewTasks());

deleteTask(2);
console.log(viewTasks());

// Testing considerations:
// - Add multiple tasks and verify they are added correctly.
// - Update existing tasks and verify the changes.
// - Delete tasks and verify they are removed.
// - Test with invalid task IDs to ensure functions handle them gracefully.
// - Test with empty task names or descriptions.