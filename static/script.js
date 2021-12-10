container = document.getElementById('tasksContainer');
async function fetchTasks() {
    const response = await fetch('http://localhost:3001/api/graphql');
    const tasks = await response.json();
    return tasks;
}
fetchTasks().then(res => {
    res.data.list.forEach(task => {
        var p = document.createElement('p')
        var text = document.createTextNode(task.title);
        p.appendChild(text);
        container.append(p)
    })
});

// for create tasks add react relay?? to send in parameters for titles