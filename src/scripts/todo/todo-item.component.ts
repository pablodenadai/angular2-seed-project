import {NgIf} from 'angular2/common';
import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

import {ITodo} from './todo.interface';
import {TruncatePipe} from '../shared/pipes/truncate.pipe';

@Component({
	selector: 'todo-item'
})
@View({
	directives: [NgIf],
	pipes: [TruncatePipe],
	template: `
		<div class="row todo-item">
			<div class="col-xs-1">
				<input type="checkbox" [(ngModel)]="todo.completed" (click)="update(todo)">
			</div>
			<div class="col-xs-8">
				<span *ngIf="!editing" (click)="toggle()">
					{{ todo.title | truncate:40:'...' }}
				</span>
				<form *ngIf="editing" (ngSubmit)="submit(todo)">
					<input type="text" class="form-control" [(ngModel)]="todo.title">
				</form>
			</div>
			<div class="col-xs-3">
				<button class="btn btn-danger pull-xs-right" (click)="delete(todo)">Delete</button>
			</div>
		</div>
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
	}

	submit(todo: ITodo): void {
		this.update(todo);
		this.toggle();
	}

	toggle(): void {
		this.editing = !this.editing;
	}
}
