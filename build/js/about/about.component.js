System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                    var filtered;
                    filtered = _.filter([0, 1, 2, 3], function (number) { return (number % 2 === 0); });
                    console.log('filtered', filtered);
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about'
                    }),
                    core_1.View({
                        template: "\n   <h2>Angular 2 - Seed Project</h2>\n   <p>Light-weight and easy to use seed project for Angular 2 apps.</p>\n   <p>\n     <a href=\"https://travis-ci.org/ghpabs/angular2-seed-project\"><img src=\"https://travis-ci.org/ghpabs/angular2-seed-project.svg?branch=master\" alt=\"Build Status\"></a>\n     <a href=\"https://gitter.im/ghpabs/angular2-seed-project\"><img src=\"https://badges.gitter.im/Join%20Chat.svg\" alt=\"Join the chat at https://gitter.im/ghpabs/angular2-seed-project\"></a>\n   </p>\n   <p><img src=\"images/angular2-seed-logo.png\" width=\"250px\"></p>\n   <br>\n\n   <a class=\"btn btn-primary-outline\" href=\"https://github.com/ghpabs/angular2-seed\">GitHub</a>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            })();
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUNDO29CQUtDLElBQUksUUFBdUIsQ0FBQztvQkFDNUIsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFDLE1BQWMsSUFBSyxPQUFBLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO29CQUUxRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkEzQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsT0FBTztxQkFDakIsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0wsUUFBUSxFQUFFLGtyQkFXVDtxQkFDRCxDQUFDOztrQ0FBQTtnQkFZRixxQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsMkNBV0MsQ0FBQSIsImZpbGUiOiJhYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2Fib3V0J1xufSlcbkBWaWV3KHtcblx0dGVtcGxhdGU6IGBcbiAgIDxoMj5Bbmd1bGFyIDIgLSBTZWVkIFByb2plY3Q8L2gyPlxuICAgPHA+TGlnaHQtd2VpZ2h0IGFuZCBlYXN5IHRvIHVzZSBzZWVkIHByb2plY3QgZm9yIEFuZ3VsYXIgMiBhcHBzLjwvcD5cbiAgIDxwPlxuICAgICA8YSBocmVmPVwiaHR0cHM6Ly90cmF2aXMtY2kub3JnL2docGFicy9hbmd1bGFyMi1zZWVkLXByb2plY3RcIj48aW1nIHNyYz1cImh0dHBzOi8vdHJhdmlzLWNpLm9yZy9naHBhYnMvYW5ndWxhcjItc2VlZC1wcm9qZWN0LnN2Zz9icmFuY2g9bWFzdGVyXCIgYWx0PVwiQnVpbGQgU3RhdHVzXCI+PC9hPlxuICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXR0ZXIuaW0vZ2hwYWJzL2FuZ3VsYXIyLXNlZWQtcHJvamVjdFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9iYWRnZXMuZ2l0dGVyLmltL0pvaW4lMjBDaGF0LnN2Z1wiIGFsdD1cIkpvaW4gdGhlIGNoYXQgYXQgaHR0cHM6Ly9naXR0ZXIuaW0vZ2hwYWJzL2FuZ3VsYXIyLXNlZWQtcHJvamVjdFwiPjwvYT5cbiAgIDwvcD5cbiAgIDxwPjxpbWcgc3JjPVwiaW1hZ2VzL2FuZ3VsYXIyLXNlZWQtbG9nby5wbmdcIiB3aWR0aD1cIjI1MHB4XCI+PC9wPlxuICAgPGJyPlxuXG4gICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeS1vdXRsaW5lXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naHBhYnMvYW5ndWxhcjItc2VlZFwiPkdpdEh1YjwvYT5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qKlxuXHRcdCAqIFRoaXMgc25pcHBldCBzaG93cyBob3cgdGhpcmQtcGFydHkgbGlicmFyaWVzIGllLiBMb2Rhc2ggY2FuIGJlIGNvbnN1bWVkXG5cdFx0ICogdXNpbmcgVHlwaW5ncyAtIHRoZSB0eXBlIGRlZmluaXRpb24gbWFuYWdlci5cblx0XHQgKi9cblx0XHRsZXQgZmlsdGVyZWQ6IEFycmF5PG51bWJlcj47XG5cdFx0ZmlsdGVyZWQgPSBfLmZpbHRlcihbMCwgMSwgMiwgM10sIChudW1iZXI6IG51bWJlcikgPT4gKG51bWJlciAlIDIgPT09IDApKTtcblxuXHRcdGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIGZpbHRlcmVkKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==
