function addInput() {
  // Get the container element where inputs will be added
  const container = document.getElementById("inputContainer");

  // Create a new input element
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Additional Subjects";
  input1.classList.add("input-text");

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Grades";
  input2.classList.add("input-text");

  // Create a delete button for the input
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // Remove the corresponding input and delete button when clicked
    container.removeChild(inputWithButton);
  });

  // Wrap the input and delete button in a container div
  const inputWithButton = document.createElement("div");
  inputWithButton.appendChild(input1);
  inputWithButton.appendChild(input2);
  inputWithButton.appendChild(deleteButton);

  // Add the container with the input and delete button to the main container
  container.appendChild(inputWithButton);
}

// Function to delete the last input element
function deleteLastInput() {
  // Get the container element where inputs are stored
  const container = document.getElementById("inputContainer");
  // Get all the input elements with the specified class
  const inputs = container.getElementsByClassName("input-text");

  if (inputs.length > 0) {
    // Remove the last input and its delete button
    container.removeChild(inputs[inputs.length - 1].parentElement);
  }
}

// Add event listener to the "Add Input" button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addInput);

// Add event listener to the "Delete Last Input" button
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", deleteLastInput);


// for computing the grades of each subject

function computingGrades() {
  let totalGrade = document.querySelector("#total");
  let english = parseFloat(document.querySelector("#e1").value);
  let math = parseFloat(document.querySelector("#m1").value);
  let filipino = parseFloat(document.querySelector("#f1").value);
  let science = parseFloat(document.querySelector("#s1").value);
  let ap = parseFloat(document.querySelector("#ap1").value);

  // Get the dynamically added input fields and calculate their total score
  const container = document.getElementById("inputContainer");
  const inputs = container.getElementsByClassName("input-text");
  let additionalScore = 0;

  for (let i = 0; i < inputs.length; i += 2) {
    const subjectGrade = parseFloat(inputs[i + 1].value);
    if (!isNaN(subjectGrade)) {
      additionalScore += subjectGrade;
    }
  }

  // Calculate the average score
  const totalSubjects = 5 + inputs.length / 2; // Divide by 2 since each subject has two inputs
  const totalScore = english + math + filipino + science + ap + additionalScore;
  const allTotal = totalScore / totalSubjects;

  // Display the grade on the page
  totalGrade.value = allTotal.toFixed(2); // Display the result with two decimal places
  

  const inputElement = document.querySelector("#input-text");
  inputElement.value = '';
}