import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Todo} from './todo';
import {ITodo} from './todo.interface';
import {TodoService} from './todo.service';

import {LogElement} from '../shared/directives/log-element.directive';

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES, LogElement],
	template: `
		<form (ngSubmit)="submit(todo)">
			<input
				type="text"
				class="form-control form-control-lg"
				placeholder="new todo, press enter to save"
				[(ngModel)]="todo.title"
				logElement>
		</form>
	`
})
export class TodoInputComponent {
	todo: ITodo = new Todo();

	constructor(
		private todoService: TodoService
	) {}

	submit(todo: ITodo): void {
		if (!todo.title) {
			return;
		}

		this.todoService.todos.unshift(todo);

		this.todoService
			.create(todo)
			.subscribe((todo: ITodo) => console.log('created!', todo));

		this.todo = new Todo();
	}
}
