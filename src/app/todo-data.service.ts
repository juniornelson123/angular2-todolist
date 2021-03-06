import { Injectable } from '@angular/core';
import {Todo} from "./todo";


@Injectable()
export class TodoDataService {

	lastId: number = 0;

	todos: Todo[] = [];

  constructor() { }


  //Simular POST /todos

  addTodo(todo: Todo): TodoDataService {
  	if(!todo.id) {
  		todo.id = ++this.lastId;
  		// code...
  	}
  	this.todos.push(todo);
  	return this
  }

  //Simular DELETE /todos/:id

  deleteTodoById(id: number): TodoDataService{
  	this.todos = this.todos.filter(todo => todo.id !== id)
  	return this
  }

  //Simular PUT /todos/:id
  updateTodoById(id: number, values: Object={}):Todo{
  	let todo = this.getTodoById(id)
  	if(!todo) {
  		return null
  		// code...
  	}

  	Object.assign(todo, values);
  	return todo
  }

  //Simular GET /todos
  getAllTodos(): Todo[]{
  	return this.todos
  }

  //Simular GET /todos/:id
  getTodoById(id: number): Todo{
  	return this.todos.filter(todo => todo.id === id).pop()
  }

  //Marcar todo como completo
  toggleTodoComplete(todo: Todo){
  	let updatedTodo = this.updateTodoById(todo.id,{complete: !todo.complete})

  	return updatedTodo
  }

}
