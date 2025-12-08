const baseURL = "http://localhost:3003/tasks";

// Load all tasks
function loadTasks(query = "") {
  $("#taskList").html("<p>Loading...</p>");

  $.ajax({
    url: baseURL + query,
    method: "GET",
    success: function(tasks) {
      $("#taskList").empty();

      if (tasks.length === 0) {
        $("#taskList").html("<p>No tasks found</p>");
        return;
      }

      tasks.forEach(task => renderTask(task));
    }
  });
}

// Render individual task
function renderTask(task) {
  const taskItem = $(`
    <div class='task-item ${task.completed ? "completed" : ""}'>
      <input type='checkbox' class='toggleComplete' ${task.completed ? "checked" : ""} data-id='${task.id}'>
      <strong>${task.title}</strong> 
      <span>(${task.priority})</span>
    </div>
  `);

  // Checkbox toggle event (PATCH)
  taskItem.find(".toggleComplete").on("change", function() {
    const id = $(this).data("id");
    const newValue = $(this).is(":checked");

    $.ajax({
      url: `${baseURL}/${id}`,
      method: "PATCH",
      data: JSON.stringify({ completed: newValue }),
      contentType: "application/json; charset=UTF-8",
      success: function() {
        loadTasks($("#filter").val());
      }
    });
  });

  $("#taskList").append(taskItem);
}

// Filter dropdown change event
$("#filter").on("change", function() {
  const value = $(this).val();

  // Sorting rules
  if (value === "") loadTasks("");
  else if (value === "completed") loadTasks("?completed=true");
  else loadTasks(`?priority=${value}`);
});

// Initial load
loadTasks();
