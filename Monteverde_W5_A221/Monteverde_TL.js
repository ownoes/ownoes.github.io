taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const task = taskInput.value.trim();
    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});