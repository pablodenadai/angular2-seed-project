System.register(['angular2/http', 'angular2/core', './todo.service', './todo-list.component', './todo-input.component', '../shared/services/rest.service'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, todo_service_1, todo_list_component_1, todo_input_component_1, rest_service_1;
    var TodoComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            },
            function (todo_input_component_1_1) {
                todo_input_component_1 = todo_input_component_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.header = 'Todo';
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            rest_service_1.RestOptions,
                            rest_service_1.RestService,
                            todo_service_1.TodoService
                        ]
                    }),
                    core_1.View({
                        directives: [todo_input_component_1.TodoInputComponent, todo_list_component_1.TodoListComponent],
                        template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t<p>For this example we're using\n\t\t\t\t\t<a href=\"http://jsonplaceholder.typicode.com/\" target=\"_blank\">\n\t\t\t\t\t\tJSONPlaceholder - Fake Online REST API for Testing and Prototyping\n\t\t\t\t\t</a>.\n\t\t\t\t</p>\n\t\t\t\t<todo-input></todo-input>\n\t\t\t\t<br>\n\t\t\t\t<todo-list></todo-list>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            })();
            exports_1("TodoComponent", TodoComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1DQTtnQkFBQTtvQkFXUSxXQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixDQUFDO2dCQXRDRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixTQUFTLEVBQUU7NEJBQ1YscUJBQWM7NEJBQ2QsMEJBQVc7NEJBQ1gsMEJBQVc7NEJBQ1gsMEJBQVc7eUJBQ1g7cUJBQ0QsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0wsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsdUNBQWlCLENBQUM7d0JBQ25ELFFBQVEsRUFBRSxrYUFhVDtxQkFDRCxDQUFDOztpQ0FBQTtnQkFhRixvQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQseUNBWUMsQ0FBQSIsImZpbGUiOiJ0b2RvL3RvZG8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7VG9kb1NlcnZpY2V9IGZyb20gJy4vdG9kby5zZXJ2aWNlJztcbmltcG9ydCB7VG9kb0xpc3RDb21wb25lbnR9IGZyb20gJy4vdG9kby1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvZG9JbnB1dENvbXBvbmVudH0gZnJvbSAnLi90b2RvLWlucHV0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7UmVzdE9wdGlvbnMsIFJlc3RTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvcmVzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndG9kbycsXG5cdHByb3ZpZGVyczogW1xuXHRcdEhUVFBfUFJPVklERVJTLFxuXHRcdFJlc3RPcHRpb25zLFxuXHRcdFJlc3RTZXJ2aWNlLFxuXHRcdFRvZG9TZXJ2aWNlXG5cdF1cbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtUb2RvSW5wdXRDb21wb25lbnQsIFRvZG9MaXN0Q29tcG9uZW50XSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XG5cdFx0XHRcdDxwPkZvciB0aGlzIGV4YW1wbGUgd2UncmUgdXNpbmdcblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRKU09OUGxhY2Vob2xkZXIgLSBGYWtlIE9ubGluZSBSRVNUIEFQSSBmb3IgVGVzdGluZyBhbmQgUHJvdG90eXBpbmdcblx0XHRcdFx0XHQ8L2E+LlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDx0b2RvLWlucHV0PjwvdG9kby1pbnB1dD5cblx0XHRcdFx0PGJyPlxuXHRcdFx0XHQ8dG9kby1saXN0PjwvdG9kby1saXN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiBUaGlzIGlzIGEgZG9jIGNvbW1lbnQgZm9yIGB0aXRsZWAuXG5cdCAqIEBleGFtcGxlIFRoaXMgaXMgYSBjYXB0aW9uLlxuXHQgKiBgYGB0c1xuXHQgKiB2YXIgd29ybGQ6IFN0cmluZyA9ICd3b3JsZCc7XG5cdCAqIHZhciBoZWxsbzogU3RyaW5nID0gJ0hlbGxvICcgKyB3b3JsZDtcblx0ICogY29uc29sZS5sb2coaGVsbG8pO1xuXHQgKiBgYGBcblx0ICogQGRlcHJlY2F0ZWQgVGhpcyBpcyBhbiBleGFtcGxlIG9mIHRoZSBgZGVwcmVjYXRlZGAgYW5ub3RhdGlvbiB0YWcuXG5cdCAqL1xuXHRwdWJsaWMgaGVhZGVyID0gJ1RvZG8nO1xufVxuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==
