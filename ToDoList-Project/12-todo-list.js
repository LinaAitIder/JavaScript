const todoList = [];
renderTodoList();
 function renderTodoList(){
  let displayed_list = document.querySelector('.todoList_displayed');
  let todoListHTML='';
  todoList.forEach((todoObject ,index) => {
    const {name} = todoObject;
    const {dueDate} = todoObject;
    const html = `
      <div >${name}</div>
      <div>${dueDate} </div>
      <button class="deleteBtn js-delete-button">Delete</button>
    `;
     todoListHTML += html;
  });
  displayed_list.innerHTML= todoListHTML;
  document.querySelectorAll('.js-delete-button').forEach((deletebtn, index) => {
    deletebtn.addEventListener('click', ()=>{
      todoList.splice(index, 1);
      renderTodoList();
    });
  
  });

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
document.querySelector('.js-el-add-btn').addEventListener('click', () =>{
  addTodo();
})

