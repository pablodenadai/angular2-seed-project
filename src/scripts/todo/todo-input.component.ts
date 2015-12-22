import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Todo} from './todo';
import {ITodo} from './todo.interface';
import {TodoService} from './todo.service';

import {LogElement} from '../shared/directives/log-element.directive';

@Component({
	selector: 'todo-input'
})
@View({
	directives: [FORM_DIRECTIVES, LogElement],
	template: `
		<form (ngSubmit)="submit(todo)">
			<input type="text" [(ngModel)]="todo.title" logElement>
		</form>
	`
})
export class TodoInputComponent {
	todo: ITodo = new Todo();

	constructor(
		private todoService: TodoService
	) {}

	submit(todo: ITodo): void {
		this.todoService.save(todo);
		this.todo = new Todo();
	}
}
