import {it, describe, expect} from 'angular2/testing';

import {Todo} from './todo';

describe('Todo', () => {
	let todo: Todo;

	beforeEach(() => {
		todo = new Todo();
	});

	it('should instantiate with no arguments', () => {
		todo = new Todo();
		expect(todo).toBeDefined();
	});

	it('should generate random `id`', () => {
		todo = new Todo();
		expect(todo.id).toBeGreaterThan(-1);
	});

	it('should instantiate with `title` argument', () => {
		todo = new Todo('foo');
		expect(todo.title).toBe('foo');
	});
});
