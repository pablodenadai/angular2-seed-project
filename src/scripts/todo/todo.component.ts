import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View} from 'angular2/core';

import {TodoService} from './todo.service';
import {TodoListComponent} from './todo-list.component';
import {TodoInputComponent} from './todo-input.component';

@Component({
	selector: 'todo',
	providers: [
		HTTP_PROVIDERS,
		TodoService
	]
})
@View({
	directives: [TodoInputComponent, TodoListComponent],
	template: `
		<div>
			<h2>{{ header }}</h2>
			<todo-input></todo-input>
			<todo-list></todo-list>
		</div>
	`
})
export class TodoComponent {
	/**
	 * This is a doc comment for `title`.
	 * @example This is a caption.
	 * ```ts
	 * var world: String = 'world';
	 * var hello: String = 'Hello ' + world;
	 * console.log(hello);
	 * ```
	 * @deprecated This is an example of the `deprecated` annotation tag.
	 */
	public header = 'Todo';
}
