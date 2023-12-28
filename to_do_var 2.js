const toDoList = [{
  name: '',
  dueDate: ''
}];

renderApp();

function renderApp(){
  let todoListHTML = '';
    
  for (let i = 1; i < toDoList.length; i++){
    const elementObject = toDoList[i];
  
    const name = elementObject.name;
    const dueDate = elementObject.dueDate;
    const dueDate2 = elementObject.dueDate2;
    const html = `
    <div class="final_text">
      ${name}
    </div>
      
    <div class="final_date"> 
      ${dueDate}
    </div>
  
    <div class="final_date2"> 
      ${dueDate2}
    </div>

    <button class="delete_button" onclick='
      toDoList.splice(${i}, 1);
      renderApp();
    '>Delete</button>
    `;
    todoListHTML += html;
  
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
  console.log(todoListHTML)
  }


function newList(){

const inputElement = document.querySelector('.todo');
const name = inputElement.value;

const inputDate = document.querySelector('.datetime');
const dueDate = inputDate.value;

const inputDate2 = document.querySelector('.datetime2');
const dueDate2 = inputDate2.value;

toDoList.push({
  name,
  dueDate,
  dueDate2
});


inputElement.value= '';
inputDate.value='';
inputDate2.value='';


renderApp();
}

function newKeyDown (event) {
  if ( event.key === 'Enter') {
newList();
}
}

document.body.querySelector('.addB').addEventListener('keydown', (event) => {
  if ( event.key === 'Enter'){
    newList();
  }
})