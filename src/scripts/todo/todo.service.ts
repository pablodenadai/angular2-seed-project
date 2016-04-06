import 'rxjs/add/operator/map';

import {Observable} from 'rxjs';
import {Injectable} from 'angular2/core';

import {RestService} from '../shared/services/rest.service';
import {ITodo} from './todo.interface';

@Injectable()
export class TodoService {
	public todos: ITodo[] = [];

	constructor(
		private rest: RestService
	) {}

	fetch(): Observable<ITodo[]> {
		return this.rest.read('/todos', { userId: 1 });
	}

	create(todo: ITodo): Observable<ITodo> {
		return this.rest.create('/todos', todo);
	}

	update(todo: ITodo): Observable<ITodo> {
		return this.rest.update(`/todos/${todo.id}`, todo);
	}

	delete(todo: ITodo): Observable<ITodo> {
		return this.rest.delete(`/todos/${todo.id}`);
	}
}
