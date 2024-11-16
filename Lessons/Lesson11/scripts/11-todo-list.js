const todoList = [];
renderTodoList();
 function renderTodoList(){
  let displayed_list = document.querySelector('.todoList_displayed');
  let todoListHTML='';
  for (let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const {name} = todoObject;
    const {dueDate} = todoObject;
    const html = `
      <div >${name}</div>
      <div>${dueDate} </div>
      <button class="deleteBtn" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      ">Delete</button>
    `;
     todoListHTML += html;
  }
  displayed_list.innerHTML= todoListHTML;

}
function addTodo(){
    
     let inputText = document.querySelector('.js-text-input');
     let inputDate = document.querySelector('.js-date-input');
     let name = inputText.value;
     let dueDate = inputDate.value;

     todoList.push({
       name, 
       dueDate
      });
      inputText.value ='';
      inputDate.value ='';


     renderTodoList();
} 
function remove(){
  

}