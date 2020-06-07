//state
let todos = [];

//DOMS
const $todos = document.querySelector('.todos');
const $inputToddo = document.querySelector('.input-todo');
const $removeTodo = document.querySelector('.remove-todo');
const $clearCompleted = document.querySelector('.remove-todo');

//취득에 성공하면 초기표시한다
//input text checkbox 처리

//서버로부터 데이터를 가져온다
const getTodos = () => {
  //DB에서 가져온것처럼
  todos = [
    { id: 3, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 1, content: 'Javascript', completed: false}
  ];

  todos.sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

const getnerateId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) +1 : 1;

const addTodo = content => {
  todos = [{ id: getnerateId(), content, completed: false}, ...todos];
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const toggleTodo = id => {
  todos.map(todos => todo.id === +id ? {...todo, completed: !todo.completed});
};

const render = () => {
  let html = '';
  todos.forEach( ({id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox"  type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-m${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  });

  
  $completedTodo.textContent = todos.filter(todos => todo.completed).length;
  $todos.innerHTML = html;
};
//윈도에서 로드 이벤트 발생
window.onload = () => {
  //웹 어플이 가동하자마자 할일
  getTodos();
  render();
};

getTodos();

//event bindings

$inputToddo.onkeyup = e => {
  if (e.keyCode !== 13) return;
  
  addTodo($inputTodo.value);
  $inputTodo.value = '';
  render();
};

$todos.onclick = e => {
  if (!e.target.matches('.remove-todo')) return;
  console.log(e.target);
  removeTodo(target.parentNode.id);
  render();
};

$todos.onchange = ({target}) => {
  toggleTodo(taget.parentNode.id)
  render();
};

$completedAll.onchange = e => {
  console.log($completedAll.checked);
  
};

