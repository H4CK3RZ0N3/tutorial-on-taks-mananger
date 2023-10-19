document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new list item
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
                <button class="complete">Mark as Done</button>
            `;

            // Add the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";

            // Add event listener to delete button
            const deleteBtn = listItem.querySelector(".delete");
            deleteBtn.addEventListener("click", function() {
                taskList.removeChild(listItem);
            });

            // Add event listener to mark task as completed
            const completeBtn = listItem.querySelector(".complete");
            completeBtn.addEventListener("click", function() {
                listItem.classList.toggle("completed");
                completeBtn.textContent = "Mark as Undone";
                completeBtn.classList.toggle("undone");
                completeBtn.removeEventListener("click", completeTask);
                completeBtn.addEventListener("click", undoTask);
            });
            
            // Function to mark as undone
            function undoTask() {
                listItem.classList.toggle("completed");
                completeBtn.textContent = "Mark as Done";
                completeBtn.classList.toggle("undone");
                completeBtn.removeEventListener("click", undoTask);
                completeBtn.addEventListener("click", completeTask);
            }
            
            // Function to mark as done
            function completeTask() {
                listItem.classList.toggle("completed");
                completeBtn.textContent = "Mark as Undone";
                completeBtn.classList.toggle("undone");
                completeBtn.removeEventListener("click", completeTask);
                completeBtn.addEventListener("click", undoTask);
            }
        }
    });
});
