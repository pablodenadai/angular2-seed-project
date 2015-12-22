import {Component, View, Input, Output, EventEmitter} from 'angular2/core';
import {NgIf} from 'angular2/common';

import {ITodo} from './todo.interface';
import {TruncatePipe} from '../shared/pipes/title-case.pipe';

@Component({
	selector: 'todo-item'
})
@View({
	directives: [NgIf],
	pipes: [TruncatePipe],
	template: `
		<span *ngIf="!editing" (click)="toggle()">{{ todo.title | truncate:50:'...' }}</span>
		<form *ngIf="editing" (ngSubmit)="update(todo)">
			<input type="text" [(ngModel)]="todo.title">
		</form>
		<button (click)="delete(todo)">Delete</button>
	`
})
export class TodoItemComponent {
	private editing: boolean = false;

	@Input() todo: ITodo;
	@Output('delete') deleteEmitter: EventEmitter<ITodo> = new EventEmitter();
	@Output('update') updateEmitter: EventEmitter<ITodo> = new EventEmitter();

	delete(todox: ITodo): void {
		this.deleteEmitter.emit(todox);
	}

	update(todo: ITodo): void {
		this.updateEmitter.emit(todo);
		this.toggle();
	}

	toggle(): void {
		this.editing = !this.editing;
	}
}
