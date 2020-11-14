import {Component, HostListener}   from '@angular/core';
import {Priority, Todo, todosMock} from './todo.model';
import {NgForm}                    from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  currentPage: number;
  order: boolean;
  todos: Todo[];

  constructor() {
    this.order = false;
    this.currentPage = 1;
    this.todos = JSON.parse(localStorage.getItem('todos')) || todosMock;
  }

  @HostListener('window:beforeunload')
  setTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getPrioritiesArray(): string[] {
    return Object.values(Priority);
  }

  onAddTask(form: NgForm) {
    this.todos = [...this.todos, form.value];
  }

  sortTodos(type: 'name' | 'priority') {
    this.order = !this.order;
    this.todos.sort((a: Todo, b: Todo) => {
      const comparison = this.order ? a[type] < b[type] : a[type] > b[type];
      return comparison ? -1 : 1;
    });
  }

  onDeleteTask(index: number) {
    this.todos.splice(index, 1);
  }
}
