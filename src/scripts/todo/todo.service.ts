import 'rxjs/add/operator/map';

import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

import {ITodo} from './todo.interface';

@Injectable()
export class TodoService {
	private todos: ITodo[] = [];

	private url: string;
	private headers: Headers;

	constructor(
		private http: Http
	) {
		this.url = 'http://jsonplaceholder.typicode.com/todos';

		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
	}

	fetch(): void {
		this.http.get(this.url)
			.map((res: Response) => res.json())
			.subscribe((todos: ITodo[]) => this.todos = todos);
	}

	create(todo: ITodo): void {
		this.todos.unshift(todo);

		this.http.post(this.url, JSON.stringify(todo), { headers: this.headers })
			.subscribe(() => console.log('created'));
	}

	update(todo: ITodo): void {
		this.http.put(`${this.url}/${todo.id}`, JSON.stringify(todo), { headers: this.headers })
			.subscribe(() => console.log('updated'));
	}

	delete(todo: ITodo): void {
		this.todos.splice(this.todos.indexOf(todo), 1);

		this.http.delete(`${this.url}/${todo.id}`)
			.subscribe(() => console.log('deleted'));
	}
}
