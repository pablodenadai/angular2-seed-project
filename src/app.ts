import {bootstrap, Component, View} from 'angular2/angular2';

import {TodoInput} from './todo/todo-input';
import {TodoList} from './todo/todo-list';
import {TodoService} from './shared/services/todo-service';

@Component({
	selector: 'app'
})
@View({
	directives: [TodoInput, TodoList],
	template: `
		<div>
			<h1>{{ bar }}</h1>

			<todo-input></todo-input>
			<todo-list></todo-list>
		</div>
	`
})
export class App {
	/**
	 * This is a doc comment for `bar`.
	 * @deprecated This is an example of the `deprecated` annotation tag.
	 */
	private bar: String = 'Todo';

	constructor() {
		this.print(this.bar);
	}

	/**
	 * @param value Some value to be printed.
	 */
	print(value: String) {
	  console.log('print()', value);
	}
};

bootstrap(App, [TodoService]);
