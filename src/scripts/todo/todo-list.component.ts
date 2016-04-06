import {NgFor} from 'angular2/common';
import {Component} from 'angular2/core';

import {ITodo} from './todo.interface';
import {TodoService} from './todo.service';
import {TodoItemComponent} from './todo-item.component';

@Component({
	selector: 'todo-list',
	directives: [NgFor, TodoItemComponent],
	template: `
		<ul class="list-unstyled">
			<li *ngFor="#todo of todoService.todos">
				<todo-item
					[todo]="todo"
					(delete)="delete(todo)"
					(update)="update(todo)">
				</todo-item>
			</li>
		</ul>
	`
})
export class TodoListComponent {
	constructor(
		private todoService: TodoService
	) {
		this.todoService
			.fetch()
			.subscribe((todos: ITodo[]) => this.todoService.todos = todos);
	}

	delete(todo: ITodo): void {
		this.todoService.todos.splice(this.todoService.todos.indexOf(todo), 1);

		this.todoService
			.delete(todo)
			.subscribe(() => console.log('deleted!'));
	}

	update(todo: ITodo): void {
		this.todoService
			.update(todo)
			.subscribe((todo: ITodo) => console.log('updated!', todo));
	}
}
