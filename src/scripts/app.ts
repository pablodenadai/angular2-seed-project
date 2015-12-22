import {bootstrap} from 'angular2/platform/browser';
import {Component, View, enableProdMode} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';

@Component({
	selector: 'app'
})
@View({
	directives: [ROUTER_DIRECTIVES],
	template: `
		<div>
			<h1>{{ title }}</h1>
			<a [routerLink]="['Home']">Home</a>
			<a [routerLink]="['Todo']">Todo</a>
			<router-outlet></router-outlet>
		</div>
	`
})
@RouteConfig([
	{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/todo', name: 'Todo', component: TodoComponent }
])
export class AppComponent {
	/**
	 * This is a doc comment for `title`.
	 * @example This is a caption.
	 * ```ts
	 * var world: String = 'world';
	 * var hello: String = 'Hello ' + world;
	 * console.log(hello);
	 * ```
	 * @deprecated This is an example of the `deprecated` annotation tag.
	 */
	public title = 'Angular 2 Seed';
}

// @if prod
enableProdMode();
// @endif

bootstrap(AppComponent, [
	ROUTER_PROVIDERS
]);
