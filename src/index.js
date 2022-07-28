import './styles.css';

import { Todo, TodoList } from './classes' // Al no especificar un archivo, entonces se direje a index por default
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( tarea );

// console.log( todoList );
// crearTodoHtml( tarea );


// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout( () => {

//     localStorage.removeItem('mi-key');

// }, 5500);


//console.log( todoList.todos );

//todoList.todos.forEach( todo => crearTodoHtml( todo ));
// Cuando la instrucción forEach devuelve un solo argumento y además
// el argumento que se quiere enviar es el único argumento 
// que se manda a una función o método
// Se puede obviar quitando función de flecha, y quitar el argumento enviado
 todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( newTodo );
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

//console.log( 'todos', todoList.todos );


