const columns = document.querySelectorAll(".column");

tasksData.forEach(task => {
  const div = document.createElement("div");
  div.className = "task " + task.type;
  div.textContent = task.text;
  div.draggable = true;

  div.addEventListener("dragstart", () => {
    div.classList.add("dragging");
  });

  div.addEventListener("dragend", () => {
    div.classList.remove("dragging");
  });

  document.getElementById(task.column).appendChild(div);
});

columns.forEach(col => {
  col.addEventListener("dragover", e => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    col.appendChild(dragging);
  });
});