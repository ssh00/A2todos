import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  this.todos = this._todoService.getTodos();
  }
addTodo(){
  var newTodo = {
    text: this.text
  }
  this.todos.push({newTodo});

  this._todoService.addTodo(newTodo);

}
deleteTodo(todotext){
  for(var i= 0; i< this.todos.length;i++){
    if(this.todos[i].text == todotext){
      this.todos.splice(i,1);
    }
  }
}
}
