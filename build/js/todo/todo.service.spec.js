System.register(['angular2/testing', 'angular2/core', 'angular2/http', 'angular2/http/testing', './todo', './todo.service', '../shared/services/rest.service'], function(exports_1) {
    "use strict";
    var testing_1, core_1, http_1, testing_2, todo_1, todo_service_1, rest_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            }],
        execute: function() {
            testing_1.describe('TodoService', function () {
                testing_1.beforeEachProviders(function () { return [
                    todo_service_1.TodoService,
                    rest_service_1.RestService,
                    rest_service_1.RestOptions,
                    testing_2.MockBackend,
                    http_1.BaseRequestOptions,
                    core_1.provide(http_1.Http, {
                        useFactory: function (backend, defaultOptions) {
                            return new http_1.Http(backend, defaultOptions);
                        },
                        deps: [
                            testing_2.MockBackend, http_1.BaseRequestOptions
                        ]
                    })
                ]; });
                testing_1.describe('TodoService', function () {
                    testing_1.it('should be defined', testing_1.inject([todo_service_1.TodoService], function (service) {
                        testing_1.expect(service).toBeDefined();
                    }));
                    testing_1.describe('create()', function () {
                        testing_1.it('should add a new todo', testing_1.inject([todo_service_1.TodoService], function (service) {
                            testing_1.expect(service.todos.length).toBe(0);
                            var todo = new todo_1.Todo('Water the plants');
                            service.create(todo);
                            testing_1.expect(service.todos.length).toBe(1);
                        }));
                    });
                    testing_1.describe('delete()', function () {
                        testing_1.it('should remove a todo', testing_1.inject([todo_service_1.TodoService], function (service) {
                            testing_1.expect(service.todos.length).toBe(0);
                            var todo = new todo_1.Todo('Water the plants');
                            service.create(todo);
                            testing_1.expect(service.todos.length).toBe(1);
                            service.delete(todo);
                            testing_1.expect(service.todos.length).toBe(0);
                        }));
                    });
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby5zZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUEsa0JBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZCLDZCQUFtQixDQUFDLGNBQU0sT0FBQTtvQkFDekIsMEJBQVc7b0JBQ1gsMEJBQVc7b0JBQ1gsMEJBQVc7b0JBRVgscUJBQVc7b0JBQ1gseUJBQWtCO29CQUNsQixjQUFPLENBQUMsV0FBSSxFQUFFO3dCQUNiLFVBQVUsRUFBRSxVQUFDLE9BQW9CLEVBQUUsY0FBa0M7NEJBQ3BFLE1BQU0sQ0FBQyxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQzFDLENBQUM7d0JBQ0QsSUFBSSxFQUFFOzRCQUNMLHFCQUFXLEVBQUUseUJBQWtCO3lCQUMvQjtxQkFDRCxDQUFDO2lCQUNGLEVBZnlCLENBZXpCLENBQUMsQ0FBQztnQkFFSCxrQkFBUSxDQUFDLGFBQWEsRUFBRTtvQkFDdkIsWUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFNLENBQUMsQ0FBQywwQkFBVyxDQUFDLEVBQUUsVUFBQyxPQUFvQjt3QkFDbEUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFSixrQkFBUSxDQUFDLFVBQVUsRUFBRTt3QkFDcEIsWUFBRSxDQUFDLHVCQUF1QixFQUFFLGdCQUFNLENBQUMsQ0FBQywwQkFBVyxDQUFDLEVBQUUsVUFBQyxPQUFvQjs0QkFDdEUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFFckMsSUFBSSxJQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFFckIsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFFSCxrQkFBUSxDQUFDLFVBQVUsRUFBRTt3QkFDcEIsWUFBRSxDQUFDLHNCQUFzQixFQUFFLGdCQUFNLENBQUMsQ0FBQywwQkFBVyxDQUFDLEVBQUUsVUFBQyxPQUFvQjs0QkFDckUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFFckMsSUFBSSxJQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDckIsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFFckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDckIsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRvZG8vdG9kby5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2l0LCBkZXNjcmliZSwgZXhwZWN0LCBpbmplY3QsIGJlZm9yZUVhY2hQcm92aWRlcnN9IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuXG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBCYXNlUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtNb2NrQmFja2VuZH0gZnJvbSAnYW5ndWxhcjIvaHR0cC90ZXN0aW5nJztcblxuaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHtUb2RvU2VydmljZX0gZnJvbSAnLi90b2RvLnNlcnZpY2UnO1xuaW1wb3J0IHtSZXN0U2VydmljZSwgUmVzdE9wdGlvbnN9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnVG9kb1NlcnZpY2UnLCAoKSA9PiB7XG5cdGJlZm9yZUVhY2hQcm92aWRlcnMoKCkgPT4gW1xuXHRcdFRvZG9TZXJ2aWNlLFxuXHRcdFJlc3RTZXJ2aWNlLFxuXHRcdFJlc3RPcHRpb25zLFxuXG5cdFx0TW9ja0JhY2tlbmQsXG5cdFx0QmFzZVJlcXVlc3RPcHRpb25zLFxuXHRcdHByb3ZpZGUoSHR0cCwge1xuXHRcdFx0dXNlRmFjdG9yeTogKGJhY2tlbmQ6IE1vY2tCYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogQmFzZVJlcXVlc3RPcHRpb25zKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVwczogW1xuXHRcdFx0XHRNb2NrQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zXG5cdFx0XHRdXG5cdFx0fSlcblx0XSk7XG5cblx0ZGVzY3JpYmUoJ1RvZG9TZXJ2aWNlJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsIGluamVjdChbVG9kb1NlcnZpY2VdLCAoc2VydmljZTogVG9kb1NlcnZpY2UpID0+IHtcblx0XHRcdGV4cGVjdChzZXJ2aWNlKS50b0JlRGVmaW5lZCgpO1xuXHRcdH0pKTtcblxuXHRcdGRlc2NyaWJlKCdjcmVhdGUoKScsICgpID0+IHtcblx0XHRcdGl0KCdzaG91bGQgYWRkIGEgbmV3IHRvZG8nLCBpbmplY3QoW1RvZG9TZXJ2aWNlXSwgKHNlcnZpY2U6IFRvZG9TZXJ2aWNlKSA9PiB7XG5cdFx0XHRcdGV4cGVjdChzZXJ2aWNlLnRvZG9zLmxlbmd0aCkudG9CZSgwKTtcblxuXHRcdFx0XHRsZXQgdG9kbzogVG9kbyA9IG5ldyBUb2RvKCdXYXRlciB0aGUgcGxhbnRzJyk7XG5cdFx0XHRcdHNlcnZpY2UuY3JlYXRlKHRvZG8pO1xuXG5cdFx0XHRcdGV4cGVjdChzZXJ2aWNlLnRvZG9zLmxlbmd0aCkudG9CZSgxKTtcblx0XHRcdH0pKTtcblx0XHR9KTtcblxuXHRcdGRlc2NyaWJlKCdkZWxldGUoKScsICgpID0+IHtcblx0XHRcdGl0KCdzaG91bGQgcmVtb3ZlIGEgdG9kbycsIGluamVjdChbVG9kb1NlcnZpY2VdLCAoc2VydmljZTogVG9kb1NlcnZpY2UpID0+IHtcblx0XHRcdFx0ZXhwZWN0KHNlcnZpY2UudG9kb3MubGVuZ3RoKS50b0JlKDApO1xuXG5cdFx0XHRcdGxldCB0b2RvOiBUb2RvID0gbmV3IFRvZG8oJ1dhdGVyIHRoZSBwbGFudHMnKTtcblx0XHRcdFx0c2VydmljZS5jcmVhdGUodG9kbyk7XG5cdFx0XHRcdGV4cGVjdChzZXJ2aWNlLnRvZG9zLmxlbmd0aCkudG9CZSgxKTtcblxuXHRcdFx0XHRzZXJ2aWNlLmRlbGV0ZSh0b2RvKTtcblx0XHRcdFx0ZXhwZWN0KHNlcnZpY2UudG9kb3MubGVuZ3RoKS50b0JlKDApO1xuXHRcdFx0fSkpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==
