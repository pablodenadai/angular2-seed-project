System.register(['angular2/core', 'angular2/common', './todo', './todo.service', '../shared/directives/log-element.directive'], function(exports_1) {
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
    var core_1, common_1, todo_1, todo_service_1, log_element_directive_1;
    var TodoInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (log_element_directive_1_1) {
                log_element_directive_1 = log_element_directive_1_1;
            }],
        execute: function() {
            TodoInputComponent = (function () {
                function TodoInputComponent(todoService) {
                    this.todoService = todoService;
                    this.todo = new todo_1.Todo();
                }
                TodoInputComponent.prototype.submit = function (todo) {
                    if (!todo.title) {
                        return;
                    }
                    this.todoService.create(todo);
                    this.todo = new todo_1.Todo();
                };
                TodoInputComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-input'
                    }),
                    core_1.View({
                        directives: [common_1.FORM_DIRECTIVES, log_element_directive_1.LogElement],
                        template: "\n\t\t<form (ngSubmit)=\"submit(todo)\">\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"form-control form-control-lg\"\n\t\t\t\tplaceholder=\"new todo, press enter to save\"\n\t\t\t\t[(ngModel)]=\"todo.title\"\n\t\t\t\tlogElement>\n\t\t</form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoInputComponent);
                return TodoInputComponent;
            })();
            exports_1("TodoInputComponent", TodoInputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFHQyw0QkFDUyxXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBSGpDLFNBQUksR0FBVSxJQUFJLFdBQUksRUFBRSxDQUFDO2dCQUl0QixDQUFDO2dCQUVKLG1DQUFNLEdBQU4sVUFBTyxJQUFXO29CQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixNQUFNLENBQUM7b0JBQ1IsQ0FBQztvQkFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQTlCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3FCQUN0QixDQUFDO29CQUNELFdBQUksQ0FBQzt3QkFDTCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLGtDQUFVLENBQUM7d0JBQ3pDLFFBQVEsRUFBRSxnUUFTVDtxQkFDRCxDQUFDOztzQ0FBQTtnQkFnQkYseUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELG1EQWVDLENBQUEiLCJmaWxlIjoidG9kby90b2RvLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5pbXBvcnQge1RvZG99IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQge0lUb2RvfSBmcm9tICcuL3RvZG8uaW50ZXJmYWNlJztcbmltcG9ydCB7VG9kb1NlcnZpY2V9IGZyb20gJy4vdG9kby5zZXJ2aWNlJztcblxuaW1wb3J0IHtMb2dFbGVtZW50fSBmcm9tICcuLi9zaGFyZWQvZGlyZWN0aXZlcy9sb2ctZWxlbWVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd0b2RvLWlucHV0J1xufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgTG9nRWxlbWVudF0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGZvcm0gKG5nU3VibWl0KT1cInN1Ym1pdCh0b2RvKVwiPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJuZXcgdG9kbywgcHJlc3MgZW50ZXIgdG8gc2F2ZVwiXG5cdFx0XHRcdFsobmdNb2RlbCldPVwidG9kby50aXRsZVwiXG5cdFx0XHRcdGxvZ0VsZW1lbnQ+XG5cdFx0PC9mb3JtPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFRvZG9JbnB1dENvbXBvbmVudCB7XG5cdHRvZG86IElUb2RvID0gbmV3IFRvZG8oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHRvZG9TZXJ2aWNlOiBUb2RvU2VydmljZVxuXHQpIHt9XG5cblx0c3VibWl0KHRvZG86IElUb2RvKTogdm9pZCB7XG5cdFx0aWYgKCF0b2RvLnRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50b2RvU2VydmljZS5jcmVhdGUodG9kbyk7XG5cdFx0dGhpcy50b2RvID0gbmV3IFRvZG8oKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==
