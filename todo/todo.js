loadtodo = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayout(data);
        });
};

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// // }
displayout = (todos) => {
    // for(let data of todos){
    //   console.log(data);

    // }
    const todocontainer = document.getElementById("todo-container");
    todocontainer.innerHTML = "";
    todos.forEach(todo => {
        // console.log(todo);
        const card = document.createElement("h4");
        card.classList.add("card-container");

        const heading = document.createElement("h3");
        heading.innerText = `title: ${todo.title}`;

        const completed = document.createElement("p");
        completed.innerHTML = `
    completed: ${todo.completed}
    <i class="fa-solid ${
        todo.completed ? "fa-square-check" : "fa-circle-xmark"
    }"></i>
`;
        // const statusIcon = document.createElement("i");
        // statusIcon.classList.add(
        //     "fa-solid",
        //     todo.completed ? "fa-square-check" : "fa-circle-xmark"
        // );
        // completed.appendChild(statusIcon);


        card.appendChild(heading);
        card.appendChild(completed)
        todocontainer.appendChild(card);
    });
}
loadtodo();
