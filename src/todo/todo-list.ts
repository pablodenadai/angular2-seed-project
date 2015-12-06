import {Component, View, NgFor} from 'angular2/angular2';

import {TodoService} from '../shared/services/todo-service';

@Component({
	selector: 'todo-list'
})
@View({
	directives: [NgFor],
	template: `
		<ul>
			<li *ng-for="#todo of todoService.todos">
				{{ todo }}
			</li>
		</ul>
	`
})
export class TodoList {
	constructor(
		public todoService: TodoService
	) {

	}
}
