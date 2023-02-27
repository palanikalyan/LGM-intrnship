// Declare global variables
var nameInput = document.getElementById("name");
var rollnoInput = document.getElementById("rollno");
var subjectInput = document.getElementById("subject");
var marksInput = document.getElementById("marks");
var table = document.getElementById("table");
var data = [];

// Function to add data to the table and data array
function addData() {
  // Get input values
  var name = nameInput.value;
  var rollno = rollnoInput.value;
  var subject = subjectInput.value;
  var marks = marksInput.value;

  // Create a new row and cells
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  // Add input values to the cells
  cell1.innerHTML = name;
  cell2.innerHTML = roll;
  cell3.innerHTML = subject;
cell4.innerHTML = marks;
cell5.innerHTML = '<button type="button" onclick="deleteRow(this)">Delete</button>';

// Add input values to the data array
data.push({
name: name,
rollno: rollno,
subject: subject,
marks: marks
});

// Clear input fields
nameInput.value = "";
rollnoInput.value = "";
subjectInput.value = "";
marksInput.value = "";
}

// Function to delete a row from the table and data array
function deleteRow(btn) {
var index = btn.parentNode.parentNode.rowIndex;
table.deleteRow(index);
data.splice(index - 1, 1);
}

// Function to calculate and display the total marks, average marks, and percentage
function calculate() {
var totalMarks = 0;
for (var i = 0; i < data.length; i++) {
totalMarks += parseInt(data[i].marks);
}
var averageMarks = totalMarks / data.length;
var percentage = (totalMarks / (data.length * 100)) * 100;

var result = document.getElementById("result");
result.innerHTML = "Total Marks: " + totalMarks + "<br>" +
"Average Marks: " + averageMarks + "<br>" +
"Percentage: " + percentage + "%";
}
