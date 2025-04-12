
let todoList = [
    {
        task : '',
        date: ''
    },
];
displayList();

function addTodo(){
    let todoEle = document.querySelector('.todo-input');
    todoList.push({task : todo-input , date: todo-date} );
    // todoEle.value = '';
    
    displayList();
}


function displayList(){
    let todoItems = document.querySelector('.listOfItems');
    let dynamicHtml = '';
    for(let i = 0; i < todoList.length; i++)
    {
        dynamicHtml += `
        <div>
            <span>${todoList[i]}</span>
            <button onclick = "todoList.splice(${i} , 1);
            displayList();">Delete</button>
        </div>
        `
    }
    todoItems.innerHTML = dynamicHtml;


}