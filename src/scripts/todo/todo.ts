import {ITodo} from './todo.interface';

export class Todo implements ITodo {
	public id: number;
	public title: string;
	public completed: boolean;
}
