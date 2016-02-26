System.register(['angular2/common', 'angular2/core', './todo.service', './todo-item.component'], function(exports_1) {
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
    var common_1, core_1, todo_service_1, todo_item_component_1;
    var TodoListComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_item_component_1_1) {
                todo_item_component_1 = todo_item_component_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(todoService) {
                    this.todoService = todoService;
                    this.todoService.fetch();
                }
                TodoListComponent.prototype.delete = function (todo) {
                    this.todoService.delete(todo);
                };
                TodoListComponent.prototype.update = function (todo) {
                    this.todoService.update(todo);
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list'
                    }),
                    core_1.View({
                        directives: [common_1.NgFor, todo_item_component_1.TodoItemComponent],
                        template: "\n\t\t<ul class=\"list-unstyled\">\n\t\t\t<li *ngFor=\"#todo of todoService.todos\">\n\t\t\t\t<todo-item\n\t\t\t\t\t[todo]=\"todo\"\n\t\t\t\t\t(delete)=\"delete(todo)\"\n\t\t\t\t\t(update)=\"update(todo)\">\n\t\t\t\t</todo-item>\n\t\t\t</li>\n\t\t</ul>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoListComponent);
                return TodoListComponent;
            })();
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUNDLDJCQUNTLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFFaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxrQ0FBTSxHQUFOLFVBQU8sSUFBVztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsa0NBQU0sR0FBTixVQUFPLElBQVc7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQTlCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3FCQUNyQixDQUFDO29CQUNELFdBQUksQ0FBQzt3QkFDTCxVQUFVLEVBQUUsQ0FBQyxjQUFLLEVBQUUsdUNBQWlCLENBQUM7d0JBQ3RDLFFBQVEsRUFBRSxrUUFVVDtxQkFDRCxDQUFDOztxQ0FBQTtnQkFlRix3QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsaURBY0MsQ0FBQSIsImZpbGUiOiJ0b2RvL3RvZG8tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nRm9yfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0lUb2RvfSBmcm9tICcuL3RvZG8uaW50ZXJmYWNlJztcbmltcG9ydCB7VG9kb1NlcnZpY2V9IGZyb20gJy4vdG9kby5zZXJ2aWNlJztcbmltcG9ydCB7VG9kb0l0ZW1Db21wb25lbnR9IGZyb20gJy4vdG9kby1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3RvZG8tbGlzdCdcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtOZ0ZvciwgVG9kb0l0ZW1Db21wb25lbnRdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWRcIj5cblx0XHRcdDxsaSAqbmdGb3I9XCIjdG9kbyBvZiB0b2RvU2VydmljZS50b2Rvc1wiPlxuXHRcdFx0XHQ8dG9kby1pdGVtXG5cdFx0XHRcdFx0W3RvZG9dPVwidG9kb1wiXG5cdFx0XHRcdFx0KGRlbGV0ZSk9XCJkZWxldGUodG9kbylcIlxuXHRcdFx0XHRcdCh1cGRhdGUpPVwidXBkYXRlKHRvZG8pXCI+XG5cdFx0XHRcdDwvdG9kby1pdGVtPlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2Vcblx0KSB7XG5cdFx0dGhpcy50b2RvU2VydmljZS5mZXRjaCgpO1xuXHR9XG5cblx0ZGVsZXRlKHRvZG86IElUb2RvKTogdm9pZCB7XG5cdFx0dGhpcy50b2RvU2VydmljZS5kZWxldGUodG9kbyk7XG5cdH1cblxuXHR1cGRhdGUodG9kbzogSVRvZG8pOiB2b2lkIHtcblx0XHR0aGlzLnRvZG9TZXJ2aWNlLnVwZGF0ZSh0b2RvKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==
