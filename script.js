let selectedRow = null;

function onFormSubmit() {
  const formData = readFormData();

  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }

  resetForm();
}

function readFormData() {
  return {
    fullname: document.getElementById("fullname").value.trim(),
    empcode: document.getElementById("empcode").value.trim(),
    salary: document.getElementById("salary").value.trim(),
    city: document.getElementById("city").value.trim(),
  };
}

function insertNewRecord(data) {
  const table = document
    .getElementById("emplist")
    .getElementsByTagName("tbody")[0];

  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = data.fullname;
  newRow.insertCell(1).textContent = data.empcode;
  newRow.insertCell(2).textContent = data.salary;
  newRow.insertCell(3).textContent = data.city;
  newRow.insertCell(4).innerHTML = `
    <a onclick="onEdit(this)">Edit</a>
    <a onclick="onDelete(this)">Delete</a>
  `;
}

function resetForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("empcode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(link) {
  selectedRow = link.parentElement.parentElement;

  document.getElementById("fullname").value = selectedRow.cells[0].textContent;
  document.getElementById("empcode").value = selectedRow.cells[1].textContent;
  document.getElementById("salary").value = selectedRow.cells[2].textContent;
  document.getElementById("city").value = selectedRow.cells[3].textContent;
}

function updateRecord(data) {
  selectedRow.cells[0].textContent = data.fullname;
  selectedRow.cells[1].textContent = data.empcode;
  selectedRow.cells[2].textContent = data.salary;
  selectedRow.cells[3].textContent = data.city;
}

function onDelete(link) {
  if (confirm("Are you sure you want to delete this record?")) {
    const row = link.parentElement.parentElement;
    document.getElementById("emplist").deleteRow(row.rowIndex);
    resetForm();
  }
}
