const todoArray = [
    {
        name: 'clean the house',
        dueDate: '2022-07-14'
    }, 
    {
        name: 'wash the dishes',
        dueDate: '2022-07-14'
    }
]
renderTodoList()
function renderTodoList() {
    let displayTodoHTML = ''
    for (let i = 0; i < todoArray.length; i++) {
        const arrayObject = todoArray[i];
        // const name = arrayObject.name;
        // const dueDate = arrayObject.dueDate;
        const { name, dueDate } = arrayObject;
        const displayTodo = `
            <div>${name}</div>
            <div>${dueDate}</div> 
            <button class="delete-button" onclick="
                todoArray.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
        `;
        displayTodoHTML += displayTodo;
    }
    console.log(document.querySelector('.todo-item').innerHTML = displayTodoHTML);
}
function addInput() {
    const nameInputElement = document.querySelector('.js-todo-name');
    const dateElement = document.querySelector('.js-date');
    let name = nameInputElement.value;
    let dueDate = dateElement.value;
    if (name && dueDate) {
        todoArray.push({name,dueDate})
        console.log(todoArray)
    }
    nameInputElement.value = '',
    dateElement.value = '';
    renderTodoList()
}