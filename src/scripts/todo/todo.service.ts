import 'rxjs/add/operator/map';

import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

import {ITodo} from './todo.interface';

@Injectable()
export class TodoService {
	private url: string = 'http://jsonplaceholder.typicode.com/todos';
	private todos: ITodo[] = [];

	constructor(
		private http: Http
	) {}

	fetch(): void {
		this.http.get(this.url)
			.map((res: Response) => res.json())
			.subscribe((todos: ITodo[]) => this.todos = todos);
	}

	create(todo: ITodo): void {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(this.url, JSON.stringify(todo), { headers: headers })
			.subscribe(() => this.todos.unshift(todo));
	}

	update(todo: ITodo): void {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.put(`${this.url}/${todo.id}`, JSON.stringify(todo), { headers: headers });
	}

	delete(todo: ITodo): void {
		this.http.delete(`${this.url}/${todo.id}`)
			.subscribe(() => this.todos.splice(this.todos.indexOf(todo), 1));
	}
}
