import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';

import { TodoService } from 'base/build/js/shared/services/todo-service';

describe('user service', () => {
  beforeEachProviders(() => [TodoService])

  it('should have 3 todos', inject([TodoService], (service) => {
    expect(service.todos.length).toBe(3);
  }));

  it('should add a new todo', inject([TodoService], (service) => {
    expect(service.todos.length).toBe(3);

    service.addTodo('test');
    expect(service.todos.length).toBe(4);
  }));

});
