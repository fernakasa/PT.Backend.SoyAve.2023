//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
  });

function addTask() {
  const name = document.getElementById("taskName").value;
  const date = document.getElementById("taskDate").value;
  const priority = document.getElementById("taskPriority").value;
  const description = document.getElementById("taskDescription").value;

  const table = document.getElementById("taskTable");
  const newRow = table.insertRow(-1);
  newRow.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>${priority}</td>
        <td>${description}</td>
        <td>
            <button type="button" onclick="editTask(this)">Editar</button>
            <button type="button" onclick="deleteTask(this)">Borrar</button>
        </td>
    `;

  clearForm();
}

function clearForm() {
  document.getElementById("taskForm").reset();
}

function editTask(button) {
  const row = button.parentNode.parentNode;
  const cells = row.getElementsByTagName("td");

  const name = cells[0].innerText;
  const date = cells[1].innerText;
  const priority = cells[2].innerText;
  const description = cells[3].innerText;

  document.getElementById("taskName").value = name;
  document.getElementById("taskDate").value = date;
  document.getElementById("taskPriority").value = priority;
  document.getElementById("taskDescription").value = description;

  row.remove();
}

function deleteTask(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}
