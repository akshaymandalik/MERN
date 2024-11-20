/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.todo = [];
  }
  add(nTodo) {
    this.todo.push(nTodo);
  }
  remove(index) {
    this.todo.splice(index,1);
  }
  update(index, updatedtodo) {

    if (index>(this.todo.length-1)) {
      return;
    }
    this.todo[index] = updatedtodo;
  }
  getAll() {
    return this.todo;
  }
  get(indexOfTodo) {
    if (indexOfTodo > this.todo.length - 1) {
      return null;
    }
    return this.todo[indexOfTodo];
  }
  clear() {
    this.todo = [];
  }

}

let myToDoList = new Todo();

myToDoList.add("Creating Sheet for tracking account money!!");
let myToDo = myToDoList.getAll();
console.log(myToDo);

//module.exports = Todo;
