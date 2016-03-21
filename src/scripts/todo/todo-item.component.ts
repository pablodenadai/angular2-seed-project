import {NgIf} from 'angular2/common';
import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {ITodo} from './todo.interface';
import {TruncatePipe} from '../shared/pipes/truncate.pipe';

@Component({
	selector: 'todo-item',
	directives: [NgIf],
	pipes: [TruncatePipe],
	template: `
		<div class="row todo-item" [ngClass]="{ completed: todo.completed }">
			<div class="col-xs-1">
				<input type="checkbox" class="todo-item-select" [(ngModel)]="todo.completed" (click)="update(todo)">
			</div>

			<div class="col-xs-8">
				<span class="todo-item-text" *ngIf="!editing" (click)="toggleEditState()">
					{{ todo.title | truncate:30:'...' }}
				</span>

				<form *ngIf="editing" (ngSubmit)="submit(todo)">
					<input type="text" class="todo-item-input" [(ngModel)]="todo.title">
				</form>
			</div>

			<div class="col-xs-3">
				<button class="todo-item-delete" (click)="delete(todo)">Delete</button>
			</div>
		</div>
	`
})
export class TodoItemComponent {
	private editing: boolean = false;

	@Input() todo: ITodo;
	@Output('delete') deleteEmitter: EventEmitter<ITodo> = new EventEmitter();
	@Output('update') updateEmitter: EventEmitter<ITodo> = new EventEmitter();

	delete(todo: ITodo): void {
		this.deleteEmitter.emit(todo);
	}

	update(todo: ITodo): void {
		this.updateEmitter.emit(todo);
	}

	submit(todo: ITodo): void {
		this.update(todo);
		this.toggleEditState();
	}

	toggleEditState(): void {
		this.editing = !this.editing;
	}
}
