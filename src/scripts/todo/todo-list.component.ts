import {NgFor} from 'angular2/common';
import {Component, View} from 'angular2/core';

import {ITodo} from './todo.interface';
import {TodoService} from './todo.service';
import {TodoItemComponent} from './todo-item.component';

@Component({
	selector: 'todo-list'
})
@View({
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
		this.todoService.fetch();
	}

	delete(todo: ITodo): void {
		this.todoService.delete(todo);
	}

	update(todo: ITodo): void {
		this.todoService.update(todo);
	}
}
