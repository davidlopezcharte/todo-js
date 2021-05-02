import './styles.css';

import {Todo, TodoList} from './classes';

import {crearTodoHtml} from './js/componentes.js'



// import { Todo } from  './classes/todo.class.js'
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();
console.log('todo', todoList.todos);

const newTodo = new Todo('Java Script');
//todoList.nuevoTodo(newTodo);

//todoList.todos[].imprimirClases();

//newTodo.imprimirClases()



//todoList.todos.forEach(todo => crearTodoHtml( todo ) );
//crearTodoHtml(newTodo);

todoList.todos.forEach(todo => crearTodoHtml(todo));

//todoList.todos[0].imprimirClases();


    


//const tarea = new Todo ('Aprender JavaScript');


//console.log(todoList);
//todoList.nuevoTodo (tarea);
// todoList.nuevoTodo (tarea2);
//crearTodoHtml ( tarea );


// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');



// setTimeout( ()=> {

    // localStorage.removeItem('mi-key')


// }, 1500); 


