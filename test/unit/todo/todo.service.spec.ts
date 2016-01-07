import {it, describe, expect, inject, beforeEachProviders} from 'angular2/testing';

import {provide} from 'angular2/core';
import {Http, BaseRequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Todo} from '../../../src/scripts/todo/todo';
import {TodoService} from '../../../src/scripts/todo/todo.service';
import {RestService, RestOptions} from '../../../src/scripts/shared/services/rest.service';

describe('TodoService', () => {
	beforeEachProviders(() => [
		TodoService,
		RestService,
		RestOptions,

		MockBackend,
		BaseRequestOptions,
		provide(Http, {
			useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
				return new Http(backend, defaultOptions);
			},
			deps: [
				MockBackend, BaseRequestOptions
			]
		})
	]);

	describe('TodoService', () => {
		it('should be defined', inject([TodoService], (service: TodoService) => {
			expect(service).toBeDefined();
		}));

		describe('create()', () => {
			it('should add a new todo', inject([TodoService], (service: TodoService) => {
				expect(service.todos.length).toBe(0);

				let todo: Todo = new Todo('Water the plants');
				service.create(todo);

				expect(service.todos.length).toBe(1);
			}));
		});

		describe('delete()', () => {
			it('should remove a todo', inject([TodoService], (service: TodoService) => {
				expect(service.todos.length).toBe(0);

				let todo: Todo = new Todo('Water the plants');
				service.create(todo);
				expect(service.todos.length).toBe(1);

				service.delete(todo);
				expect(service.todos.length).toBe(0);
			}));
		});
	});
});
