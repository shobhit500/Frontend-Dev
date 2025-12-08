const apiUrl = "http://localhost:3002/employees";
const tableBody = document.querySelector("#employeeTable tbody");
const errorMsg = document.getElementById("errorMsg");

// Fetch all employees
function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const employees = JSON.parse(xhr.responseText);
      tableBody.innerHTML = "";
      employees.forEach(emp => addEmployeeRow(emp));
    } else {
      showError("Failed to load employees");
    }
  };
  xhr.send();
}

// Add a single employee row
function addEmployeeRow(emp) {
  const row = document.createElement("tr");
  row.className = emp.status;
  row.innerHTML = `
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.status}</td>
    <td><button>${emp.status === "active" ? "Deactivate" : "Activate"}</button></td>
  `;
  const toggleBtn = row.querySelector("button");

  toggleBtn.addEventListener("click", function() {
    const newStatus = emp.status === "active" ? "inactive" : "active";
    const originalStatus = emp.status;

    // Optimistically update UI
    emp.status = newStatus;
    row.className = newStatus;
    row.cells[2].textContent = newStatus;
    toggleBtn.textContent = newStatus === "active" ? "Deactivate" : "Activate";

    // PATCH request
    const xhrPatch = new XMLHttpRequest();
    xhrPatch.open("PATCH", `${apiUrl}/${emp.id}`);
    xhrPatch.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPatch.onload = function() {
      if (xhrPatch.status >= 400) {
        // Revert UI if request fails
        emp.status = originalStatus;
        row.className = originalStatus;
        row.cells[2].textContent = originalStatus;
        toggleBtn.textContent = originalStatus === "active" ? "Deactivate" : "Activate";
        showError("Failed to update status");
      }
    };
    xhrPatch.onerror = function() {
      emp.status = originalStatus;
      row.className = originalStatus;
      row.cells[2].textContent = originalStatus;
      toggleBtn.textContent = originalStatus === "active" ? "Deactivate" : "Activate";
      showError("Network error");
    };
    xhrPatch.send(JSON.stringify({ status: newStatus }));
  });

  tableBody.appendChild(row);
}

// Show error message
function showError(msg) {
  errorMsg.textContent = msg;
  setTimeout(() => { errorMsg.textContent = ""; }, 3000);
}

// Initial load
loadEmployees();
