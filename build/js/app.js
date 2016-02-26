System.register(['angular2/core', 'angular2/router', './todo/todo.component', './about/about.component'], function(exports_1) {
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
    var core_1, router_1, todo_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular 2 Seed';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t<div>\n\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['Todo']\">Todo</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['About']\">About</a></li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: '/todo', name: 'Todo', component: todo_component_1.TodoComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUFBO29CQVdRLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDakMsQ0FBQztnQkFuQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsS0FBSzt3QkFDZixTQUFTLEVBQUU7NEJBQ1YseUJBQWdCO3lCQUNoQjtxQkFDRCxDQUFDO29CQUNELFdBQUksQ0FBQzt3QkFDTCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFFLCtUQVNUO3FCQUNELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUM3RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtxQkFDNUQsQ0FBQzs7Z0NBQUE7Z0JBYUYsbUJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHVDQVlDLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7VG9kb0NvbXBvbmVudH0gZnJvbSAnLi90b2RvL3RvZG8uY29tcG9uZW50JztcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXBwJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Uk9VVEVSX1BST1ZJREVSU1xuXHRdXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXY+XG5cdFx0XHQ8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XG5cdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnVG9kbyddXCI+VG9kbzwvYT48L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIj5BYm91dDwvYT48L2xpPlxuXHRcdFx0PC91bD5cblx0XHRcdDxocj5cblx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy90b2RvJywgbmFtZTogJ1RvZG8nLCBjb21wb25lbnQ6IFRvZG9Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuXHR7IHBhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqIFRoaXMgaXMgYSBkb2MgY29tbWVudCBmb3IgYHRpdGxlYC5cblx0ICogQGV4YW1wbGUgVGhpcyBpcyBhIGNhcHRpb24uXG5cdCAqIGBgYHRzXG5cdCAqIHZhciB3b3JsZDogU3RyaW5nID0gJ3dvcmxkJztcblx0ICogdmFyIGhlbGxvOiBTdHJpbmcgPSAnSGVsbG8gJyArIHdvcmxkO1xuXHQgKiBjb25zb2xlLmxvZyhoZWxsbyk7XG5cdCAqIGBgYFxuXHQgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIGBkZXByZWNhdGVkYCBhbm5vdGF0aW9uIHRhZy5cblx0ICovXG5cdHB1YmxpYyB0aXRsZSA9ICdBbmd1bGFyIDIgU2VlZCc7XG59XG4iXSwic291cmNlUm9vdCI6IkM6XFxhbmd1bGFyMi1zZWVkLXByb2plY3RcXHNyY1xcc2NyaXB0cyJ9
