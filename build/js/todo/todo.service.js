System.register(['rxjs/add/operator/map', 'angular2/core', '../shared/services/rest.service'], function(exports_1) {
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
    var core_1, rest_service_1;
    var TodoService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService(rest) {
                    this.rest = rest;
                    this.todos = [];
                }
                TodoService.prototype.fetch = function () {
                    var _this = this;
                    this.rest.read('/todos', { userId: 1 })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (todos) { return _this.todos = todos; });
                };
                TodoService.prototype.create = function (todo) {
                    this.todos.unshift(todo);
                    this.rest.create('/todos', todo)
                        .subscribe(function () { return console.log('created!'); });
                };
                TodoService.prototype.update = function (todo) {
                    this.rest.update("/todos/" + todo.id, todo)
                        .subscribe(function () { return console.log('updated!'); });
                };
                TodoService.prototype.delete = function (todo) {
                    this.todos.splice(this.todos.indexOf(todo), 1);
                    this.rest.delete("/todos/" + todo.id)
                        .subscribe(function () { return console.log('deleted!'); });
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [rest_service_1.RestService])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBR0MscUJBQ1MsSUFBaUI7b0JBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7b0JBSG5CLFVBQUssR0FBWSxFQUFFLENBQUM7Z0JBSXhCLENBQUM7Z0JBRUosMkJBQUssR0FBTDtvQkFBQSxpQkFJQztvQkFIQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7eUJBQ3JDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ2xDLFNBQVMsQ0FBQyxVQUFDLEtBQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7Z0JBQ3JELENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLElBQVc7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO3lCQUM5QixTQUFTLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVztvQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBVSxJQUFJLENBQUMsRUFBSSxFQUFFLElBQUksQ0FBQzt5QkFDekMsU0FBUyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLElBQVc7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFVLElBQUksQ0FBQyxFQUFJLENBQUM7eUJBQ25DLFNBQVMsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQS9CRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFnQ2Isa0JBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBL0JELHFDQStCQyxDQUFBIiwiZmlsZSI6InRvZG8vdG9kby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7UmVzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtJVG9kb30gZnJvbSAnLi90b2RvLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSB7XG5cdHB1YmxpYyB0b2RvczogSVRvZG9bXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2Vcblx0KSB7fVxuXG5cdGZldGNoKCk6IHZvaWQge1xuXHRcdHRoaXMucmVzdC5yZWFkKCcvdG9kb3MnLCB7IHVzZXJJZDogMSB9KVxuXHRcdFx0Lm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRvZG9zOiBJVG9kb1tdKSA9PiB0aGlzLnRvZG9zID0gdG9kb3MpO1xuXHR9XG5cblx0Y3JlYXRlKHRvZG86IElUb2RvKTogdm9pZCB7XG5cdFx0dGhpcy50b2Rvcy51bnNoaWZ0KHRvZG8pO1xuXG5cdFx0dGhpcy5yZXN0LmNyZWF0ZSgnL3RvZG9zJywgdG9kbylcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ2NyZWF0ZWQhJykpO1xuXHR9XG5cblx0dXBkYXRlKHRvZG86IElUb2RvKTogdm9pZCB7XG5cdFx0dGhpcy5yZXN0LnVwZGF0ZShgL3RvZG9zLyR7dG9kby5pZH1gLCB0b2RvKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygndXBkYXRlZCEnKSk7XG5cdH1cblxuXHRkZWxldGUodG9kbzogSVRvZG8pOiB2b2lkIHtcblx0XHR0aGlzLnRvZG9zLnNwbGljZSh0aGlzLnRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xuXG5cdFx0dGhpcy5yZXN0LmRlbGV0ZShgL3RvZG9zLyR7dG9kby5pZH1gKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnZGVsZXRlZCEnKSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiQzpcXGFuZ3VsYXIyLXNlZWQtcHJvamVjdFxcc3JjXFxzY3JpcHRzIn0=
