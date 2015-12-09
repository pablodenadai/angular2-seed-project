export class TodoService {
	todos: string[] = [
		'eat', 'sleep', 'code'
	];

	addTodo(value:any):void {
		this.todos.push(value);
	}
}
