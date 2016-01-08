import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TodoComponent} from './todo/todo.component';
import {AboutComponent} from './about/about.component';

@Component({
	selector: 'app',
	providers: [
		ROUTER_PROVIDERS
	]
})
@View({
	directives: [ROUTER_DIRECTIVES],
	template: `
		<div>
			<ul class="nav nav-pills">
				<li class="nav-item"><a class="nav-link" [routerLink]="['Todo']">Todo</a></li>
				<li class="nav-item"><a class="nav-link" [routerLink]="['About']">About</a></li>
			</ul>
			<hr>
			<router-outlet></router-outlet>
		</div>
	`
})
@RouteConfig([
	{ path: '/todo', name: 'Todo', component: TodoComponent, useAsDefault: true },
	{ path: '/about', name: 'About', component: AboutComponent }
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
