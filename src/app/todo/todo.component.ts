import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  p: any;
  isSortedByPriorityAscending = false;
  isSortedByTaskAscending = false;
  ifSomeTodos = false;
  ifNumberOfTodosGreaterThan5 = false;
  priorities: string[] = ['Low','Medium','High'];
  todos: Todo[] = [
    new Todo('Take out the trash',this.priorities[0]),
    new Todo('Feed the dog',this.priorities[1]),
    new Todo('Order lunch',this.priorities[1]),
    new Todo('Send email to Peter',this.priorities[2]),
    new Todo('Buy groceries',this.priorities[2])
  ];
  constructor() { }

  ngOnInit() {
    
  }

  onAddTask(f: NgForm){
    if(this.todos.length >5){
      this.ifNumberOfTodosGreaterThan5 = true;
    }
      const value = f.value;
      let newTodo = new Todo(value.name,value.priority);
      this.todos.push(newTodo);
      this.ifSomeTodos=true;
      f.resetForm();
      localStorage.setItem('todos',JSON.stringify(newTodo));
  }
  onDeleteTask(index: number){
    this.todos.splice(index,1);
    localStorage.removeItem('todos');
    if(this.todos.length<1){
      this.ifSomeTodos=false;
    }
  }
  sortByPriority(){
    console.log(this.isSortedByPriorityAscending);
    if(this.isSortedByPriorityAscending === false){
      this.todos.sort((a,b)=> a.priority.localeCompare(b.priority));
      this.isSortedByPriorityAscending = true;
      alert('Sorted ascending by priority!');
    }
    else{
      this.todos.sort((a,b)=> a.priority.localeCompare(b.priority));
      this.todos.reverse();
      this.isSortedByPriorityAscending = false;
      alert('Sorted descending by priority!')

    }
      
  }
  sortByTask(){
    console.log(this.isSortedByTaskAscending);
    if(this.isSortedByTaskAscending === false){
      this.todos.sort((a,b)=> a.name.localeCompare(b.name));
      this.isSortedByTaskAscending = true;
      alert('Sorted ascending by task name! Changed to ' + this.isSortedByTaskAscending);
    }
    else{
      this.todos.sort((a,b)=> a.name.localeCompare(b.name));
      this.todos.reverse();
      this.isSortedByTaskAscending = false;
      alert('Sorted descending by task name! Changed to ' + this.isSortedByTaskAscending);

    }
  }
}
