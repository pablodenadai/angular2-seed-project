// See link below for more info about testing HTTP services
// http://chariotsolutions.com/blog/post/testing-http-services-angular-2-jasmine/

import {it, describe, expect, inject, beforeEachProviders} from 'angular2/testing';

import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

import {ITodo} from './todo.interface';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {RestService, RestOptions} from '../shared/services/rest.service';

describe('TodoService', () => {
	beforeEachProviders(() => [
		HTTP_PROVIDERS,
		provide(XHRBackend, { useClass: MockBackend }),

		TodoService,
		RestService,
		RestOptions
	]);

	it('should be defined', inject([TodoService], (service: TodoService) => {
		expect(service).toBeDefined();
	}));

	describe('fetch()', () => {
		let todoSample1 = new Todo('Go wild');
		let todoSample2 = new Todo('Go mild');

		it('should get todo list', inject([XHRBackend, TodoService], (mockBackend: MockBackend, service: TodoService) => {
			mockBackend.connections.subscribe((connection: MockConnection) => {
				connection.mockRespond(new Response(new ResponseOptions({
					body: [todoSample1, todoSample2]
				})));
			});

			service.fetch().subscribe((data: ITodo[]) => {
				expect(data.length).toBe(2);
				expect(data[0].title).toBe('Go wild');
				expect(data[1].title).toBe('Go mild');
				});
			}));
	});
});
