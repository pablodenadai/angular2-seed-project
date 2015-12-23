import {ITodo} from './todo.interface';

export class Todo implements ITodo {
	public id: number;
	public title: string;
	public completed: boolean;

	constructor(title?: string) {
		this.id = Math.floor(Math.random() * 11);
		this.title = title;
	}
}
